// @types/next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
    interface User {
        premium?: boolean; // Добавляем поле premium
        avatar?: string; // Добавляем поле avatar
    }

    interface Session {
        user: User; // Указываем, что в сессии есть пользователь с нашими типами
    }
}
