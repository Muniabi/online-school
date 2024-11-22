import NextAuth, { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import VkProvider from "next-auth/providers/vk";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { z } from "zod";
import { ZodError } from "zod";

// Интерфейсы
interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    passwordHash: string;
    premium: boolean;
    avatar?: string;
}

interface SessionUser extends User {
    name: string;
}

// Список аватаров по умолчанию
const defaultAvatars = ["avatar1.png", "avatar2.png", "avatar3.png"];

// Генерация случайного аватара
function getRandomAvatar(): string {
    const randomIndex = Math.floor(Math.random() * defaultAvatars.length);
    return defaultAvatars[randomIndex];
}

// Массив пользователей (временное решение)
const users: User[] = [
    {
        id: "1",
        firstName: "John",
        lastName: "Doe",
        email: "123@mail.ru",
        passwordHash:
            "$2b$12$RUinWLWtvDFppIwGlSjJ4OoVb6MtaGssdwTiiMFWjTz4wrGMGdibG",
        premium: true,
        avatar: "/avatar1.png",
    },
    {
        id: "2",
        firstName: "Jane",
        lastName: "Smith",
        email: "kaktus@mail.ru",
        passwordHash:
            "$2b$12$RUinWLWtvDFppIwGlSjJ4OoVb6MtaGssdwTiiMFWjTz4wrGMGdibG",
        premium: false,
        avatar: "",
    },
];

// Создание нового пользователя
function createUser({
    firstName,
    lastName,
    email,
    password,
    premium = false,
}: Omit<User, "id" | "passwordHash" | "avatar"> & { password: string }): User {
    const passwordHash = bcrypt.hashSync(password, 12); // Хэширование пароля
    const avatar = getRandomAvatar(); // Генерация аватара
    return {
        id: `${users.length + 1}`, // Генерация ID
        firstName,
        lastName,
        email,
        passwordHash,
        premium,
        avatar,
    };
}

// Поиск пользователя по email
async function getUserByEmail(email: string): Promise<User | null> {
    return users.find((user) => user.email === email) || null;
}

// Проверка наличия NEXTAUTH_SECRET
if (!process.env.NEXTAUTH_SECRET) {
    console.error(
        "NEXTAUTH_SECRET не установлен. Приложение может быть уязвимым!"
    );
    process.exit(1); // Завершаем процесс, если секрет отсутствует
}

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
const authOptions: NextAuthOptions = {
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

                    // Поиск пользователя
                    const user = await getUserByEmail(credentials.email);
                    if (
                        user &&
                        (await bcrypt.compare(
                            credentials.password,
                            user.passwordHash
                        ))
                    ) {
                        // Установка аватара, если его нет
                        if (!user.avatar) {
                            user.avatar = getRandomAvatar();
                        }

                        return {
                            id: user.id,
                            name: `${user.firstName} ${user.lastName}`,
                            email: user.email,
                            premium: user.premium,
                            avatar: user.avatar,
                        };
                    }
                } catch (e) {
                    if (e instanceof ZodError) {
                        console.error("Ошибка валидации данных:", e.errors);
                    }
                }

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
                session.user = token.user as SessionUser;
            }
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.user = user as SessionUser;
            }
            return token;
        },
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
