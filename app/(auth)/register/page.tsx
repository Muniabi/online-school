"use client";
import { useRouter } from "next/navigation"; // Измените импорт
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useSession, signIn, signOut } from "next-auth/react";
import { Avatar, AvatarImage } from "@/components/ui";

const formSchema = z.object({
    userType: z.enum(["student", "author"], {
        required_error: "Тип пользователя обязателен",
    }),
    firstName: z.string().min(1, { message: "Имя обязательно" }),
    lastName: z.string().min(1, { message: "Фамилия обязательна" }),
    email: z
        .string()
        .email({ message: "Некорректный адрес электронной почты." }),
    password: z
        .string()
        .min(6, { message: "Пароль должен содержать как минимум 6 символов." }),
});

type FormData = z.infer<typeof formSchema>;

export default function RegisterPage() {
    const router = useRouter();

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            userType: "student",
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        },
    });

    const onSubmit = async (data: FormData) => {
        console.log(data);
        // Здесь можно добавить логику для отправки данных на сервер
        router.push("/register/verifited");
    };

    return (
        <Tabs defaultValue="student" className="w-[400px] mx-auto my-12">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger
                    value="student"
                    onClick={() => form.setValue("userType", "student")}
                >
                    Студент
                </TabsTrigger>
                <TabsTrigger
                    value="author"
                    onClick={() => form.setValue("userType", "author")}
                >
                    Автор
                </TabsTrigger>
            </TabsList>

            <TabsContent value="student">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-center mb-2">
                            Студент
                        </CardTitle>
                        <CardDescription>
                            Зарегистрируйтесь как студент, чтобы получить доступ
                            к курсам, интерактивным занятиям и возможностям
                            заработка бонусов за успехи в обучении.
                        </CardDescription>
                        <div className="mx-auto">
                            <p className="py-2">Регистрация с помощью</p>
                            <div className="flex items-center justify-evenly">
                                <button
                                    onClick={() =>
                                        signIn("github", {
                                            callbackUrl: "/",
                                            redirect: true,
                                        })
                                    }
                                >
                                    <Avatar>
                                        <AvatarImage
                                            src="/github.png"
                                            alt="@shadcn"
                                        />
                                    </Avatar>
                                </button>
                                <button
                                    onClick={() =>
                                        signIn("vk", {
                                            callbackUrl: "/",
                                            redirect: true,
                                        })
                                    }
                                >
                                    <Avatar className="rounded-none">
                                        <AvatarImage
                                            src="/vk.png"
                                            alt="@shadcn"
                                        />
                                    </Avatar>
                                </button>
                                <button
                                    onClick={() =>
                                        signIn("google", {
                                            callbackUrl: "/",
                                            redirect: true,
                                        })
                                    }
                                >
                                    <Avatar>
                                        <AvatarImage
                                            src="/google.png"
                                            alt="@shadcn"
                                        />
                                    </Avatar>
                                </button>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-2"
                        >
                            <div className="space-y-1">
                                <Label htmlFor="firstName">Имя</Label>
                                <Input
                                    id="firstName"
                                    placeholder="Имя"
                                    {...form.register("firstName")}
                                />
                                {form.formState.errors.firstName && (
                                    <p className="text-red-500">
                                        {
                                            form.formState.errors.firstName
                                                .message
                                        }
                                    </p>
                                )}
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="lastName">Фамилия</Label>
                                <Input
                                    id="lastName"
                                    placeholder="Фамилия"
                                    {...form.register("lastName")}
                                />
                                {form.formState.errors.lastName && (
                                    <p className="text-red-500">
                                        {form.formState.errors.lastName.message}
                                    </p>
                                )}
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="email">Почта</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    {...form.register("email")}
                                />
                                {form.formState.errors.email && (
                                    <p className="text-red-500">
                                        {form.formState.errors.email.message}
                                    </p>
                                )}
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="password">Пароль</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="Пароль"
                                    {...form.register("password")}
                                />
                                {form.formState.errors.password && (
                                    <p className="text-red-500">
                                        {form.formState.errors.password.message}
                                    </p>
                                )}
                            </div>
                            <Button className="mx-auto">
                                Зарегистрироваться
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </TabsContent>

            <TabsContent value="author">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-center mb-2">
                            Автор
                        </CardTitle>
                        <CardDescription>
                            Зарегистрируйтесь как автор, чтобы делиться курсами,
                            получать обратную связь и создавать интерактивные
                            занятия для студентов.
                        </CardDescription>
                        <div className="mx-auto">
                            <p className="py-2">Регистрация с помощью</p>
                            <div className="flex items-center justify-evenly">
                                <button
                                    onClick={() =>
                                        signIn("github", {
                                            callbackUrl: "/",
                                            redirect: true,
                                        })
                                    }
                                >
                                    <Avatar>
                                        <AvatarImage
                                            src="/github.png"
                                            alt="@shadcn"
                                        />
                                    </Avatar>
                                </button>
                                <button
                                    onClick={() =>
                                        signIn("vk", {
                                            callbackUrl: "/",
                                            redirect: true,
                                        })
                                    }
                                >
                                    <Avatar className="rounded-none">
                                        <AvatarImage
                                            src="/vk.png"
                                            alt="@shadcn"
                                        />
                                    </Avatar>
                                </button>
                                <button
                                    onClick={() =>
                                        signIn("google", {
                                            callbackUrl: "/",
                                            redirect: true,
                                        })
                                    }
                                >
                                    <Avatar>
                                        <AvatarImage
                                            src="/google.png"
                                            alt="@shadcn"
                                        />
                                    </Avatar>
                                </button>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-2"
                        >
                            <div className="space-y-1">
                                <Label htmlFor="firstName">Имя</Label>
                                <Input
                                    id="firstName"
                                    placeholder="Имя"
                                    {...form.register("firstName")}
                                />
                                {form.formState.errors.firstName && (
                                    <p className="text-red-500">
                                        {
                                            form.formState.errors.firstName
                                                .message
                                        }
                                    </p>
                                )}
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="lastName">Фамилия</Label>
                                <Input
                                    id="lastName"
                                    placeholder="Фамилия"
                                    {...form.register("lastName")}
                                />
                                {form.formState.errors.lastName && (
                                    <p className="text-red-500">
                                        {form.formState.errors.lastName.message}
                                    </p>
                                )}
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="email">Почта</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    {...form.register("email")}
                                />
                                {form.formState.errors.email && (
                                    <p className="text-red-500">
                                        {form.formState.errors.email.message}
                                    </p>
                                )}
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="password">Пароль</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="Пароль"
                                    {...form.register("password")}
                                />
                                {form.formState.errors.password && (
                                    <p className="text-red-500">
                                        {form.formState.errors.password.message}
                                    </p>
                                )}
                            </div>
                            <Button type="submit">Зарегистрироваться</Button>
                        </form>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    );
}
