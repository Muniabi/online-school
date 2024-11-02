"use client"; // Добавьте эту строку в начало файла

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/shared/index";
import { Providers } from "@/components/shared/providers";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({
    subsets: ["cyrillic"],
    variable: "--font-montserrat",
    weight: ["400", "500", "600", "700", "800", "900"],
});

// export const metadata: Metadata = {
//     title: "KuberCode | Главная",
// };

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    const isAccountPage = pathname.startsWith("/account");

    return (
        <html lang="en">
            <body className={montserrat.className}>
                <main className="min-h-screen">
                    <Providers>
                        {!isAccountPage && <Header />}
                        {children}
                    </Providers>
                </main>
            </body>
        </html>
    );
}
