import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AuthPage() {
    return (
        <Tabs defaultValue="student" className="w-[400px] mx-auto mt-16">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="student">Студент</TabsTrigger>
                <TabsTrigger value="author">Автор</TabsTrigger>
            </TabsList>
            <TabsContent value="student">
                <Card>
                    <CardHeader>
                        <CardTitle>Студент</CardTitle>
                        <CardDescription>
                            Зарегистрируйтесь как студент, чтобы получить доступ
                            к курсам, интерактивным занятиям и возможностям
                            заработка бонусов за успехи в обучении.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="firstName">Имя</Label>
                            <Input id="firstName" placeholder="Имя" required />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="lastName">Фамилия</Label>
                            <Input
                                id="lastName"
                                placeholder="Фамилия"
                                required
                            />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="email">Почта</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="password">Пароль</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="Пароль"
                                required
                            />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Save changes</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="author">
                <Card>
                    <CardHeader>
                        <CardTitle>Автор</CardTitle>
                        <CardDescription>
                            Зарегистрируйтесь как автор, чтобы делиться курсами,
                            получать обратную связь и создавать интерактивные
                            занятия для студентов.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Имя" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="username">Username</Label>
                            <Input id="username" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Save changes</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    );
}
