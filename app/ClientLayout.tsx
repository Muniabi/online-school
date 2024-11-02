"use client"; // Обязательно добавьте это в начало файла

import { Header } from "@/components/shared/index";
import { usePathname } from "next/navigation";

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isAccountPage = pathname.startsWith("/account");

    return (
        <>
            {!isAccountPage && <Header />}
            {children}
        </>
    );
}
