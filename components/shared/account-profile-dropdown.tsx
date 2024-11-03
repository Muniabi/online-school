import React from "react";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { signOut, useSession } from "next-auth/react";
import { ChevronsUpDown, LogOut, Settings, Sparkles } from "lucide-react";
import { ProfileInfo } from "./profile-info";

export const AccountProfileDropdown = ({
    className,
}: {
    className?: string;
}) => {
    const { data: session } = useSession();

    // Проверяем, загружены ли данные пользователя
    if (!session || !session.user) {
        return null;
    }

    // Извлекаем данные пользователя из сессии
    const name = session.user.name || "";
    const email = session.user.email || "";

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center justify-between">
                {/* Аватар и информация о пользователе */}
                <ProfileInfo />
                {/* Иконка */}
                <ChevronsUpDown size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent side="right" className="px-2 pt-2">
                {/* Аватар и информация о пользователе */}
                <ProfileInfo />
                <div className="border-gray-200 border-b my-1"></div>
                <DropdownMenuItem className="flex items-center justify-between text-left">
                    Получить PRO
                    <Sparkles />
                </DropdownMenuItem>
                <div className="border-gray-200 border-b my-1"></div>
                <DropdownMenuItem className="flex items-center justify-between text-left">
                    Настройки
                    <Settings />
                </DropdownMenuItem>
                <DropdownMenuItem
                    className="flex items-center justify-between text-left"
                    onClick={() =>
                        signOut({
                            callbackUrl: "/",
                            redirect: true,
                        })
                    }
                >
                    Выйти
                    <LogOut />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
