"use client"; // Обязательно добавьте это в начало файла

import { SidebarTrigger } from "@/components/ui/sidebar";

export default function AccountLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main>
            <SidebarTrigger />
            {children}
        </main>
    );
}
