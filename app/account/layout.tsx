import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import type { Metadata } from "next";

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
            {children}
        </SidebarProvider>
    );
}
