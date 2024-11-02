// app/components/ui/app-sidebar.tsx

"use client"; // Убедитесь, что файл является клиентским

import { useEffect, useState } from "react";
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
import { Skeleton } from "@/components/ui/skeleton";

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
        url: "#",
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
    const [loading, setLoading] = useState(true);
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]); // Явное указание типа

    // Имитация загрузки данных
    useEffect(() => {
        const fetchData = async () => {
            await new Promise((resolve) => setTimeout(resolve, 2000)); // Имитация задержки
            setMenuItems(items); // Установка элементов меню
            setLoading(false); // Завершение загрузки
        };

        fetchData();
    }, []);

    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="text-sm text-slate-600">
                        KuberCode Личный Кабинет
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {loading
                                ? // Отображение скелетонов во время загрузки
                                  Array.from({ length: 5 }).map((_, index) => (
                                      <SidebarMenuItem key={index}>
                                          <SidebarMenuButton asChild>
                                              <div className="flex items-center space-x-2">
                                                  <Skeleton className="h-6 w-6" />
                                                  <Skeleton className="h-4 w-[150px]" />
                                              </div>
                                          </SidebarMenuButton>
                                      </SidebarMenuItem>
                                  ))
                                : // Отображение элементов меню после загрузки
                                  menuItems.map((item) => (
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
        </Sidebar>
    );
}
