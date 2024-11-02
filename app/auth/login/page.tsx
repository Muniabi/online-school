"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

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
    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
        // Здесь вы можете добавить логику для отправки данных на сервер
    };

    return (
        <Tabs defaultValue="login" className="w-[400px] mx-auto mt-16">
            <TabsContent value="login">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-center">Вход</CardTitle>
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
