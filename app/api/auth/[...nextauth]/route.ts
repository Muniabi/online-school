import NextAuth, { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import VkProvider from "next-auth/providers/vk";
import CredentialsProvider from "next-auth/providers/credentials";
import { z } from "zod";
import { ZodError } from "zod";

// Схема валидации входных данных
const formSchema = z.object({
    email: z.string().email({
        message: "Некорректный адрес электронной почты.",
    }),
    password: z.string().min(6, {
        message: "Пароль должен содержать как минимум 6 символов.",
    }),
});

// Опции NextAuth
export const authOptions: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID || "",
            clientSecret: process.env.GITHUB_SECRET || "",
        }),
        VkProvider({
            clientId: process.env.VK_CLIENT_ID || "",
            clientSecret: process.env.VK_CLIENT_SECRET || "",
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials) return null;

                try {
                    // Валидация входных данных
                    formSchema.parse({
                        email: credentials.email,
                        password: credentials.password,
                    });

                    // Здесь выполняем запрос к вашему API
                    const response = await fetch(
                        `${process.env.NEXT_PUBLIC_API_URL}/login`,
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                email: credentials.email,
                                password: credentials.password,
                            }),
                        }
                    );

                    const data = await response.json();

                    if (response.ok && data.accessToken) {
                        // Возвращаем объект пользователя для сессии
                        return {
                            id: data.account.id || data.account.email,
                            email: data.account.email,
                            name: data.account.email, // Можно добавить имя, если оно есть
                            isTeacher: data.account.isTeacher,
                            accessToken: data.accessToken.accessToken.token,
                            refreshToken: data.accessToken.refreshToken.token,
                        };
                    }

                    return null;
                } catch (e) {
                    if (e instanceof ZodError) {
                        console.error("Ошибка валидации данных:", e.errors);
                    }
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user, account }) {
            if (user) {
                token.accessToken = user.accessToken;
                token.refreshToken = user.refreshToken;
                token.isTeacher = user.isTeacher;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.accessToken = token.accessToken as string;
                session.user.refreshToken = token.refreshToken as string;
                session.user.isTeacher = token.isTeacher as boolean;
            }
            return session;
        },
    },
    pages: {
        signIn: "/login",
        error: "/login",
    },
    session: {
        strategy: "jwt",
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
