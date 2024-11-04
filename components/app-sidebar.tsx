"use client";

import * as React from "react";
import {
    BookOpen,
    Calendar,
    Command,
    Frame,
    LayoutDashboard,
    LifeBuoy,
    Map,
    MessageCircle,
    PieChart,
    Send,
    Settings,
    Users,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useSession } from "next-auth/react";
import { ThemeSelect } from "./shared/theme-select";

const data = {
    navMain: [
        {
            title: "Dashboard",
            url: "/account",
            icon: LayoutDashboard,
        },
        {
            title: "Расписание",
            url: "/account/schedule",
            icon: Calendar,
            items: [
                {
                    title: "Genesis",
                    url: "#",
                },
            ],
        },
        {
            title: "Домашнее задание",
            url: "/account/homeworks",
            icon: BookOpen,
            items: [
                {
                    title: "Introduction",
                    url: "#",
                },
            ],
        },
        {
            title: "Группы",
            url: "#",
            icon: Users,
            items: [
                {
                    title: "General",
                    url: "#",
                },
                {
                    title: "Team",
                    url: "#",
                },
                {
                    title: "Billing",
                    url: "#",
                },
                {
                    title: "Limits",
                    url: "#",
                },
            ],
        },
        {
            title: "Сообщения",
            url: "#",
            icon: MessageCircle,
            items: [
                {
                    title: "General",
                    url: "#",
                },
                {
                    title: "Team",
                    url: "#",
                },
                {
                    title: "Billing",
                    url: "#",
                },
                {
                    title: "Limits",
                    url: "#",
                },
            ],
        },
        {
            title: "Настройки",
            url: "#",
            icon: Settings,
            items: [
                {
                    title: "General",
                    url: "#",
                },
                {
                    title: "Team",
                    url: "#",
                },
                {
                    title: "Billing",
                    url: "#",
                },
                {
                    title: "Limits",
                    url: "#",
                },
            ],
        },
    ],
    navSecondary: [
        {
            title: "Поддержка",
            url: "#",
            icon: LifeBuoy,
        },
        {
            title: "Обратная связь",
            url: "#",
            icon: Send,
        },
    ],
    projects: [
        {
            name: "Design Engineering",
            url: "#",
            icon: Frame,
        },
        {
            name: "Sales & Marketing",
            url: "#",
            icon: PieChart,
        },
        {
            name: "Travel",
            url: "#",
            icon: Map,
        },
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const { data: session } = useSession();

    // Проверяем, загружены ли данные пользователя
    const user = {
        name: session?.user?.name ?? "Гость", // Значение по умолчанию, если name отсутствует
        email: session?.user?.email ?? "", // Пустая строка, если email отсутствует
        avatar: session?.user?.image ?? "", // Пустая строка, если avatar отсутствует
    };

    return (
        <Sidebar variant="inset" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg">
                            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-[--purple] text-sidebar-primary-foreground">
                                <Command className="size-5" />
                            </div>
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-semibold">
                                    KuberCode
                                </span>
                                <span className="truncate text-xs">
                                    Личный кабинет
                                </span>
                            </div>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
                <NavProjects projects={data.projects} />
            </SidebarContent>
            <SidebarFooter>
                <NavSecondary items={data.navSecondary} className="mt-auto" />
                <ThemeSelect />
                <NavUser user={user} />
            </SidebarFooter>
        </Sidebar>
    );
}
