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

const courses: { title: string; href: string; description: string }[] = [
    {
        title: "Рекомендуемые",
        href: "/docs/primitives/alert-dialog",
        description:
            "Курсы, рекомендованные на основе ваших интересов и достижений, чтобы помочь вам развиваться.",
    },
    {
        title: "По направлениям",
        href: "/docs/primitives/alert-dialog",
        description:
            "Изучайте курсы, организованные по направлениям, чтобы углубить свои знания в определённых областях.",
    },
    {
        title: "Реальные кейсы",
        href: "/docs/primitives/alert-dialog",
        description:
            "Работайте над реальными проектами и кейсами, чтобы применять полученные знания на практике.",
    },
    {
        title: "Интенсивы",
        href: "/docs/primitives/scroll-area",
        description:
            "Участвуйте в интенсивных курсах, чтобы быстро освоить новые навыки и технологии.",
    },
];

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
        <header className={cn("bg-white dark:bg-[--bg-color-dark]", className)}>
            <Container className="flex items-center justify-between py-6 px-6">
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
                                <Link href="/" passHref legacyBehavior>
                                    <NavigationMenuLink
                                        className={navigationMenuTriggerStyle()}
                                    >
                                        Главная
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    <Link
                                        href="/courses"
                                        passHref
                                        legacyBehavior
                                    >
                                        <NavigationMenuLink>
                                            Курсы
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                        {courses.map((course) => (
                                            <ListItem
                                                key={course.title}
                                                title={course.title}
                                                href={course.href}
                                            >
                                                {course.description}
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
                                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                        <li className="row-span-4">
                                            <NavigationMenuLink asChild>
                                                <a
                                                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-[url('/hackaton.webp')] bg-cover from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                    href="/"
                                                >
                                                    <div className="mb-2 mt-4 text-white text-lg font-medium">
                                                        Хакатоны
                                                    </div>
                                                    <p className="text-sm leading-tight text-stone-200 text-muted-foreground">
                                                        Участвуйте в хакатонах,
                                                        где сможете решать
                                                        реальные задачи и
                                                        развивать свои навыки в
                                                        команде.
                                                    </p>
                                                </a>
                                            </NavigationMenuLink>
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
                                <Link href="/support" legacyBehavior passHref>
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
                    <Link href="/auth/login">
                        <Button variant={"ghost"} className="dark:text-white">
                            <LockKeyhole size={24} />
                            Войти
                        </Button>
                    </Link>
                    <Link href="/auth/register">
                        <Button>Регистрация</Button>
                    </Link>
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
