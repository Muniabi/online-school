"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { Container, AccountButton } from "./index";
import Image from "next/image";
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

const communitys: { title: string; href: string; description: string }[] = [
    {
        title: "Форум",
        href: "/docs/primitives/alert-dialog",
        description:
            "Общайтесь с другими студентами и преподавателями, задавайте вопросы и делитесь знаниями.",
    },
    {
        title: "Новости IT",
        href: "/docs/primitives/alert-dialog",
        description:
            "Получайте обновления о последних новостях в области информационных технологий.",
    },
];

const events: { title: string; href: string; description: string }[] = [
    {
        title: "Кодинг-баттлы",
        href: "/docs/primitives/hover-card",
        description:
            "Соревнуйтесь с другими программистами в кодинг-баттлах, демонстрируя свои навыки и креативность.",
    },
    {
        title: "Лидеры недели",
        href: "/docs/primitives/progress",
        description:
            "Следите за достижениями лучших студентов недели и вдохновляйтесь их успехами.",
    },
    {
        title: "Достижения",
        href: "/docs/primitives/scroll-area",
        description:
            "Получайте достижения за успехи в обучении и делитесь ими с сообществом.",
    },
];

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
    return (
        <header
            className={cn(
                "bg-white dark:bg-[--bg-color-dark] border-[#E7E9EB] border-b dark:border-none dark:bg-[#434343]",
                className
            )}
        >
            <Container className="max-w-full flex items-center justify-between py-6 px-10">
                {/* Левая часть */}
                <div>
                    {/* <Image
                        src={"/logo.png"}
                        alt="Logo"
                        width={106}
                        height={40}
                    /> */}
                    <p className="text-3xl">Logo</p>
                </div>
                {/* Навигация */}
                <div className="">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <Link
                                    className={navigationMenuTriggerStyle()}
                                    href="/"
                                >
                                    Главная
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link
                                    className={navigationMenuTriggerStyle()}
                                    href="/courses"
                                >
                                    Курсы
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    Мероприятия
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                        <li className="row-span-4">
                                            <Link
                                                href="/"
                                                legacyBehavior
                                                passHref
                                            >
                                                <NavigationMenuLink asChild>
                                                    <a
                                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-[url('/hackaton.webp')] bg-cover from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                        href="/"
                                                    >
                                                        <div className="mb-2 mt-4 text-white text-lg font-medium">
                                                            Хакатоны
                                                        </div>
                                                        <p className="text-sm leading-tight text-stone-200 text-muted-foreground">
                                                            Участвуйте в
                                                            хакатонах, где
                                                            сможете решать
                                                            реальные задачи и
                                                            развивать свои
                                                            навыки в команде.
                                                        </p>
                                                    </a>
                                                </NavigationMenuLink>
                                            </Link>
                                        </li>
                                        {events.map((event) => (
                                            <ListItem
                                                key={event.title}
                                                title={event.title}
                                                href={event.href}
                                            >
                                                {event.description}
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
                                        {communitys.map((community) => (
                                            <ListItem
                                                key={community.title}
                                                title={community.title}
                                                href={community.href}
                                            >
                                                {community.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link
                                    className={navigationMenuTriggerStyle()}
                                    href="/support"
                                >
                                    Поддержка
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                {/* Правая часть */}
                <div className="flex items-center gap-2">
                    <AccountButton />
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
