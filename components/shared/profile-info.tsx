import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { signOut, useSession } from "next-auth/react";

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
    const name = session.user.name || "";
    const email = session.user.email || "";

    return (
        <div className="flex items-center space-x-3">
            <Avatar>
                <AvatarImage
                    src={session.user.image || "https://github.com/shadcn.png"}
                    alt={name || "Пользователь"}
                />
                <AvatarFallback>{name.charAt(0) || "?"}</AvatarFallback>
            </Avatar>
            {/* Данные пользователя */}
            <div className="text-left">
                <div className="text-sm font-medium text-gray-900">{name}</div>
                <div className="text-sm text-gray-500">{email}</div>
            </div>
        </div>
    );
};
