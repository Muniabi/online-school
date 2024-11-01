import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./index";
import Image from "next/image";
import { LockKeyhole } from "lucide-react";
import { Button } from "@/components/ui/index";
import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/index";

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Диалоговое окно",
        href: "/docs/primitives/alert-dialog",
        description:
            "Модальный диалог, который отвлекает пользователя от важного контента и ожидает ответа.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
            "Чтобы зрячие пользователи могли просматривать контент, доступный по ссылке.",
    },
    {
        title: "Прогресс",
        href: "/docs/primitives/progress",
        description:
            "Отображает индикатор, показывающий ход выполнения задачи, обычно отображаемый в виде индикатора выполнения.",
    },
    {
        title: "Область прокрутки",
        href: "/docs/primitives/scroll-area",
        description: "Визуально или семантически разделяет содержимое.",
    },
    {
        title: "Вкладки",
        href: "/docs/primitives/tabs",
        description:
            "Набор многоуровневых разделов содержимого, известных как панели вкладок, которые отображаются по одному за раз.",
    },
    {
        title: "Подсказка",
        href: "/docs/primitives/tooltip",
        description:
            "Всплывающее окно, отображающее информацию, относящуюся к элементу, когда элемент получает фокусировку клавиатуры или на него наводится курсор мыши.",
    },
];

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
    return (
        <header className={cn("bg-white dark:bg-[--bg-color-dark]", className)}>
            <Container className="flex items-center justify-between gap-36 py-8 px-6">
                {/* Левая часть */}
                <div>
                    <Image
                        src={"/logo.png"}
                        alt="Logo"
                        width={106}
                        height={40}
                    />
                </div>
                {/* Навигация */}
                <div className="">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    Главная
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                        <li className="row-span-3">
                                            <NavigationMenuLink asChild>
                                                <a
                                                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                    href="/"
                                                >
                                                    <div className="mb-2 mt-4 text-lg font-medium">
                                                        shadcn/ui
                                                    </div>
                                                    <p className="text-sm leading-tight text-muted-foreground">
                                                        Красиво оформленные
                                                        компоненты, которые вы
                                                        можете копировать и
                                                        вставлять в свои
                                                        приложения. Доступный.
                                                        Настраиваемый. Открыть
                                                        Источник.
                                                    </p>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                        <ListItem
                                            href="/docs"
                                            title="Вступление"
                                        >
                                            Повторно используемые компоненты,
                                            созданные с использованием Radix UI
                                            и Tailwind CSS.
                                        </ListItem>
                                        <ListItem
                                            href="/docs/installation"
                                            title="Установка"
                                        >
                                            Как установить зависимости и
                                            структурировать ваше приложение.
                                        </ListItem>
                                        <ListItem
                                            href="/docs/primitives/typography"
                                            title="Типография"
                                        >
                                            Стили для заголовков, абзацев,
                                            списков... и т.д.
                                        </ListItem>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    Курсы
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                        {components.map((component) => (
                                            <ListItem
                                                key={component.title}
                                                title={component.title}
                                                href={component.href}
                                            >
                                                {component.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    Соревнования
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                        {components.map((component) => (
                                            <ListItem
                                                key={component.title}
                                                title={component.title}
                                                href={component.href}
                                            >
                                                {component.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    Сообщество
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                        {components.map((component) => (
                                            <ListItem
                                                key={component.title}
                                                title={component.title}
                                                href={component.href}
                                            >
                                                {component.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/docs" legacyBehavior passHref>
                                    <NavigationMenuLink
                                        className={navigationMenuTriggerStyle()}
                                    >
                                        Поддержка
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                {/* Правая часть */}
                <div className="flex items-center gap-2">
                    <Button variant={"ghost"} className="dark:text-white">
                        <LockKeyhole size={24} />
                        Войти
                    </Button>
                    <Button>Регистрация</Button>
                </div>
            </Container>
        </header>
    );
};

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";
