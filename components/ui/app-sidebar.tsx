// app/components/ui/app-sidebar.tsx

"use client"; // Убедитесь, что файл является клиентским

import {
    Calendar,
    Home,
    MessageCircle,
    Users,
    Settings,
    LayoutDashboard,
} from "lucide-react";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { AccountProfileDropdown } from "@/components/shared/account-profile-dropdown";

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
        title: "Dashboard",
        url: "/account",
        icon: LayoutDashboard,
    },
    {
        title: "Расписание",
        url: "/account/schedule",
        icon: Calendar,
    },
    {
        title: "Домашнее задание",
        url: "/account/homeworks",
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
                    <SidebarGroupLabel className="text-sm text-slate-800">
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
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <AccountProfileDropdown />
            </SidebarFooter>
        </Sidebar>
    );
}
