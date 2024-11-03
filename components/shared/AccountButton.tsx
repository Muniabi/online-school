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

export const AccountButton: React.FC<Props> = ({ className }) => {
    const { data: session, status } = useSession(); // Добавлен статус сессии

    // Проверяем, загружается ли сессия
    if (status === "loading") {
        return (
            <div className="flex items-center gap-2">
                <Skeleton className="h-10 w-24" />{" "}
                {/* Скелетон для кнопки входа */}
                <Skeleton className="h-10 w-24" />{" "}
                {/* Скелетон для кнопки регистрации */}
            </div>
        );
    }

    // Если пользователь не аутентифицирован
    if (status === "unauthenticated") {
        return (
            <div className="flex items-center gap-2">
                <Link href="/login">
                    <Button variant={"ghost"} className="dark:text-white">
                        <LockKeyhole size={24} />
                        Войти
                    </Button>
                </Link>
                <Link href="/register">
                    <Button>Регистрация</Button>
                </Link>
            </div>
        );
    }

    // Если пользователь аутентифицирован
    if (status === "authenticated" && session?.user) {
        return (
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link href="/account">
                            <Avatar>
                                <AvatarImage
                                    src={
                                        session.user.image ||
                                        "https://github.com/shadcn.png"
                                    }
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
