import React from "react";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { signOut, useSession } from "next-auth/react";
import { ChevronsUpDown } from "lucide-react";
import { Button } from "./button";

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
                <div className="flex items-center space-x-3">
                    <Avatar>
                        <AvatarImage
                            src={
                                session.user.image ||
                                "https://github.com/shadcn.png"
                            }
                            alt={name || "Пользователь"}
                        />
                        <AvatarFallback>{name.charAt(0) || "?"}</AvatarFallback>
                    </Avatar>
                    {/* Данные пользователя */}
                    <div className="text-left">
                        <div className="text-sm font-medium text-gray-900">
                            {name}
                        </div>
                        <div className="text-sm text-gray-500">{email}</div>
                    </div>
                </div>
                {/* Иконка */}
                <ChevronsUpDown size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>Настройки</DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() =>
                        signOut({
                            callbackUrl: "/",
                            redirect: true,
                        })
                    }
                >
                    Выйти
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
