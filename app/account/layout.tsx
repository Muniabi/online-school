import type { Metadata } from "next";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import AccountLayout from "./AccountLayout"; // Импортируем клиентский компонент

// Экспортируем метаданные для страницы
export const metadata: Metadata = {
    title: "KuberCode | Личный кабинет",
};

export default function AccountPageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <AccountLayout>{children}</AccountLayout>{" "}
            {/* Используем клиентский компонент */}
        </SidebarProvider>
    );
}