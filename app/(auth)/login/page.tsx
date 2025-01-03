"use client";

import { useRouter } from "next/navigation";
import { login } from "@/utils/services/Authentication";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Avatar, AvatarImage } from "@/components/ui/index";

// Создание схемы валидации с помощью Zod
const formSchema = z.object({
    email: z.string().email({
        message: "Некорректный адрес электронной почты.",
    }),
    password: z.string().min(6, {
        message: "Пароль должен содержать как минимум 6 символов.",
    }),
});

// Создание типа для данных формы
type FormData = z.infer<typeof formSchema>;

// Главный компонент страницы авторизации
export default function LoginPage() {
    const router = useRouter();
    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (data: FormData) => {
        try {
            console.log("Form submission:", data);
            const result = await login(data.email, data.password);

            if (result?.ok) {
                toast.success("Успешный вход");
                router.push("/account");
            } else {
                console.error("Login failed:", result);
                toast.error("Неверный email или пароль");
            }
        } catch (error) {
            console.error("Login error:", error);
            toast.error(
                error instanceof Error
                    ? error.message
                    : "Произошла ошибка при входе"
            );
        }
    };

    return (
        <Tabs defaultValue="login" className="w-[400px] mx-auto mt-16">
            <TabsContent value="login">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-center">Вход</CardTitle>
                        <div className="mx-auto">
                            <p className="py-2">Войти с помощью</p>
                            <div className="flex items-center justify-around">
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
                                            src="/github.svg"
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
                    <CardContent className="space-y-4">
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="space-y-4"
                            >
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Логин (Email)</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="email"
                                                    placeholder="Email"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Пароль</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="password"
                                                    placeholder="Пароль"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit">Войти</Button>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="register">
                {/* Компонент регистрации можно добавить здесь */}
            </TabsContent>
        </Tabs>
    );
}
