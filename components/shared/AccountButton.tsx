import React from "react";
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

const defaultAvatars = ["avatar1.png", "avatar2.png", "avatar3.png"];

function getAvatar(session: any): string {
    if (session?.user.image) return session.user.image;
    const savedAvatar = sessionStorage.getItem("randomAvatar");
    if (savedAvatar) return savedAvatar;

    const randomAvatar =
        defaultAvatars[Math.floor(Math.random() * defaultAvatars.length)];
    sessionStorage.setItem("randomAvatar", randomAvatar);
    return randomAvatar;
}

export const AccountButton: React.FC<Props> = ({ className }) => {
    const { data: session, status } = useSession();

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
        const avatarSrc = getAvatar(session);

        return (
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link href="/account" aria-label="Профиль">
                            <Avatar>
                                <AvatarImage
                                    src={avatarSrc}
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
