import React, { useEffect, useState } from "react";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { signOut, useSession } from "next-auth/react";
import { ChevronsUpDown, LogOut, Settings, Sparkles } from "lucide-react";
import { ProfileInfo } from "./profile-info";
import { ProfileSettings } from "./profile-settings";
import { ProSubscriptionInfo } from "./subscription/subscription";

export const AccountProfileDropdown = ({
    className,
}: {
    className?: string;
}) => {
    const { data: session } = useSession();
    const [menuSide, setMenuSide] = useState<"top" | "right">("right");

    // Устанавливаем положение меню в зависимости от ширины экрана
    useEffect(() => {
        const handleResize = () => {
            setMenuSide(window.innerWidth <= 768 ? "top" : "right");
        };

        // Инициализация
        handleResize();

        // Слушатель на изменение размера окна
        window.addEventListener("resize", handleResize);

        // Очистка слушателя при размонтировании компонента
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Проверяем, загружены ли данные пользователя
    if (!session || !session.user) {
        return null;
    }

    // Извлекаем данные пользователя из сессии
    const name = session.user.name || "";
    const email = session.user.email || "";

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center justify-between ">
                {/* Аватар и информация о пользователе */}
                <ProfileInfo />
                {/* Иконка */}
                <ChevronsUpDown size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent side={menuSide} className="px-2 pt-2">
                {/* Аватар и информация о пользователе */}
                <ProfileInfo />
                <div className="border-gray-200 border-b my-1 dark:border-[#3E3E3E]"></div>
                {/* <DropdownMenuItem className="flex items-center justify-between text-left">
                    Получить PRO
                    <Sparkles />
                </DropdownMenuItem> */}
                <ProSubscriptionInfo />
                <div className="border-gray-200 border-b my-1 dark:border-[#3E3E3E]"></div>
                <ProfileSettings />
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
