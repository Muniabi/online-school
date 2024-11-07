import { Button } from "@/components/ui";
import { ArrowUpRight } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";

export interface CategoryData {
    name: string;
    icon: React.ComponentType<any>;
}

const CategoryCard: React.FC<CategoryData> = ({ name, icon: Icon }) => {
    const { theme } = useTheme();
    return (
        <div className="card flex items-center justify-between py-4 px-6 bg-white dark:bg-[#434343] rounded-lg">
            <div className="flex gap-4 items-center text-xl font-medium leading-snug text-zinc-900">
                <Icon className="size-6 text-black dark:text-white" />
                <div className="text-black dark:text-white text-lg font-medium">
                    {name}
                </div>
            </div>
            <div className="">
                <Link href={"#"}>
                    <div className="p-[10px] hover:bg-violet-500 hover:text-white dark:bg-[#272729] dark:hover:bg-violet-500 rounded-lg transition-all duration-300">
                        <ArrowUpRight />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default CategoryCard;
