// app/components/ui/app-sidebar.tsx

"use client"; // Убедитесь, что файл является клиентским

import { Calendar, Home, MessageCircle, Users, Settings } from "lucide-react";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "./button";
import { signOut } from "next-auth/react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Определение типа для элемента меню
interface MenuItem {
    title: string;
    url: string;
    icon: React.ForwardRefExoticComponent<
        React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> &
            React.RefAttributes<SVGSVGElement>
    >;
}

// Menu items.
const items: MenuItem[] = [
    {
        title: "Главная",
        url: "/",
        icon: Home,
    },
    {
        title: "Расписание",
        url: "/account/schedule",
        icon: Calendar,
    },
    {
        title: "Домашнее задание",
        url: "#",
        icon: Calendar,
    },
    {
        title: "Сообщения",
        url: "#",
        icon: MessageCircle,
    },
    {
        title: "Группы",
        url: "#",
        icon: Users,
    },
    {
        title: "Настройки",
        url: "#",
        icon: Settings,
    },
];

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="text-sm text-slate-600">
                        KuberCode Личный Кабинет
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                        <Button
                            onClick={() =>
                                signOut({
                                    callbackUrl: "/",
                                    redirect: true,
                                })
                            }
                        >
                            Выйти
                        </Button>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
