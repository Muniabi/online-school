import NextAuth, { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import VkProvider from "next-auth/providers/vk";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

// Переменная с примерными данными пользователей (хранит хэшированные пароли)
const users = [
    {
        id: "1",
        firstName: "John",
        lastName: "Doe",
        email: "123@mail.ru",
        passwordHash:
            "$2b$12$RUinWLWtvDFppIwGlSjJ4OoVb6MtaGssdwTiiMFWjTz4wrGMGdibG",
        premium: true,
    },
    {
        id: "2",
        firstName: "Jane",
        lastName: "Smith",
        email: "kaktus@mail.ru",
        passwordHash:
            "$2b$12$RUinWLWtvDFppIwGlSjJ4OoVb6MtaGssdwTiiMFWjTz4wrGMGdibG",
        premium: false,
    },
];

// Функция для поиска пользователя по email из переменной users
async function getUserByEmail(email: string) {
    return users.find((user) => user.email === email) || null;
}

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
                firstName: { label: "First Name", type: "text" },
                lastName: { label: "Last Name", type: "text" },
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials) return null;

                // Ищем пользователя по email
                const user = await getUserByEmail(credentials.email);

                // Проверяем, существует ли пользователь и совпадает ли пароль
                if (
                    user &&
                    (await bcrypt.compare(
                        credentials.password,
                        user.passwordHash
                    ))
                ) {
                    return {
                        id: user.id,
                        name: `${user.firstName} ${user.lastName}`,
                        email: user.email,
                        premium: user.premium, // Добавляем статус подписки
                    };
                }

                // Если пользователь не найден или пароль неверный
                return null;
            },
        }),
    ],

    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async session({ session, token }) {
            if (session?.user) {
                session.user = token.user || "";
            }
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.user = user;
            }
            return token;
        },
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
