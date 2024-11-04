import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useSession } from "next-auth/react";
import { Badge } from "@/components/ui/badge";

interface Props {
    className?: string;
}

export const ProfileInfo: React.FC<Props> = ({ className }) => {
    const { data: session } = useSession();

    // Проверяем, загружены ли данные пользователя
    if (!session || !session.user) {
        return null;
    }

    // Извлекаем данные пользователя из сессии
    const { email = "", premium } = session.user;
    const name = session.user.name ? session.user.name : "Гость";

    return (
        <div className="flex items-center space-x-3">
            <Avatar>
                <AvatarImage
                    src={session.user.image || "https://github.com/shadcn.png"}
                    alt={name || "Гость"}
                />
                <AvatarFallback>{name.charAt(0) || ""}</AvatarFallback>
            </Avatar>
            {/* Данные пользователя */}
            <div className="text-left">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white">
                    {name}
                    {premium && <Badge variant={"premium"}>PRO</Badge>}{" "}
                </div>
                <div className="text-sm text-gray-500 dark:text-slate-200">
                    {email}
                </div>
            </div>
        </div>
    );
};
