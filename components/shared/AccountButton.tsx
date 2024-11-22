import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
    Button,
} from "@/components/ui/index";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { LockKeyhole } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface Props {
    className?: string;
}

function getAvatarFromLocalStorage(userId: string | undefined): string | null {
    if (!userId) return null;
    return localStorage.getItem(`avatar-${userId}`);
}

export const AccountButton: React.FC<Props> = ({ className }) => {
    const { data: session, status } = useSession();
    const [avatarSrc, setAvatarSrc] = useState<string | null>(null);

    useEffect(() => {
        if (session?.user) {
            const userId = session.user.id;

            // Сначала пытаемся получить аватар из session
            let avatar = session.user.avatar;

            // Если аватар не найден в session, пытаемся взять его из localStorage
            if (!avatar) {
                avatar = getAvatarFromLocalStorage(userId);
            }

            // Если аватара нет ни в session, ни в localStorage, используем пустое значение
            setAvatarSrc(avatar || null);
        }
    }, [session]);

    if (status === "loading") {
        return (
            <div className="flex items-center gap-2">
                <Skeleton className="h-10 w-24" />
                <Skeleton className="h-10 w-24" />
            </div>
        );
    }

    if (status === "unauthenticated") {
        return (
            <div className="flex items-center gap-2">
                <Link href="/login">
                    <Button
                        variant="ghost"
                        className="dark:text-white"
                        aria-label="Войти"
                    >
                        <LockKeyhole size={24} />
                        Войти
                    </Button>
                </Link>
                <Link href="/register">
                    <Button>Регистрация</Button>
                </Link>
            </div>
        );
    }

    if (status === "authenticated" && session?.user) {
        return (
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link href="/account" aria-label="Профиль">
                            <Avatar>
                                <AvatarImage
                                    src={avatarSrc || ""}
                                    alt={session.user.name || "User"}
                                />
                                <AvatarFallback>
                                    {session.user.name
                                        ? session.user.name.charAt(0)
                                        : "?"}
                                </AvatarFallback>
                            </Avatar>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Профиль</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        );
    }

    return null;
};
