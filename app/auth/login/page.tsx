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
        <Tabs defaultValue="login" className="w-[400px] mx-auto mt-16">
            <TabsContent value="login">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-center">Вход</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="email">Логин</Label>
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
                        <Button>Войти</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    );
}
