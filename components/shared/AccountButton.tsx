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

    return (
        <div className={className}>
            {status === "loading" ? ( // Проверяем статус загрузки
                <div className="flex items-center gap-2">
                    <Skeleton className="h-10 w-24" />{" "}
                    {/* Скелетон для кнопки входа */}
                    <Skeleton className="h-10 w-24" />{" "}
                    {/* Скелетон для кнопки регистрации */}
                </div>
            ) : !session ? (
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
            ) : (
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link href="/account">
                                <Avatar>
                                    <AvatarImage
                                        src="https://github.com/shadcn.png"
                                        alt="@shadcn"
                                    />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Профиль</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            )}
        </div>
    );
};
