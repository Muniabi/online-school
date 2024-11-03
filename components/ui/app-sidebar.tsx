"use client";

import {
    Calendar,
    Home,
    MessageCircle,
    Users,
    Settings,
    LayoutDashboard,
} from "lucide-react";
import { Switch } from "@/components/ui/switch";
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
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "./tooltip";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface MenuItem {
    title: string;
    url: string;
    icon: React.ForwardRefExoticComponent<
        React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> &
            React.RefAttributes<SVGSVGElement>
    >;
}

const items: MenuItem[] = [
    { title: "Главная", url: "/", icon: Home },
    { title: "Dashboard", url: "/account", icon: LayoutDashboard },
    { title: "Расписание", url: "/account/schedule", icon: Calendar },
    { title: "Домашнее задание", url: "/account/homeworks", icon: Calendar },
    { title: "Сообщения", url: "#", icon: MessageCircle },
    { title: "Группы", url: "#", icon: Users },
    { title: "Настройки", url: "#", icon: Settings },
];

export function AppSidebar() {
    const { theme, setTheme } = useTheme();
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Получаем сохраненную тему из localStorage или устанавливаем светлую по умолчанию
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
        setIsDarkMode(savedTheme === "dark");
    }, [setTheme]);

    const onClick = () => {
        const newTheme = isDarkMode ? "light" : "dark";
        setTheme(newTheme);
        setIsDarkMode(!isDarkMode);
        localStorage.setItem("theme", newTheme);
    };

    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="text-sm text-slate-800 dark:text-white">
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
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <div className="ml-auto">
                                <Switch
                                    className="my-2"
                                    onClick={onClick}
                                    checked={isDarkMode}
                                />
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Сменить тему</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <AccountProfileDropdown />
            </SidebarFooter>
        </Sidebar>
    );
}
