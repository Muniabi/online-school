import React from "react";
import { SideBar } from "./SideBar/side-bar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex">
            <div>
                <SideBar />
            </div>
            <div className="">{children}</div>
        </div>
    );
}
