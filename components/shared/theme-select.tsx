import React from "react";
import {
    Switch,
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface Props {
    className?: string;
}

export const ThemeSelect: React.FC<Props> = ({ className }) => {
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
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <div className="flex items-center justify-between text-sm">
                        {isDarkMode ? <p>Темная тема</p> : <p>Светлая тема</p>}
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
    );
};
