"use client";

import { Container } from "@/components/shared";
import { Button, Input } from "@/components/ui";
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import React, { useState } from "react";

const directions = [
    "Все направления",
    "Программирование",
    "Дизайн",
    "Маркетинг",
    "Игры",
    "Иностранные языки",
    "Аналитика",
    "Маркетплейсы",
    "Финансы",
    "Психология",
    "Другое",
];

const CoursesPage = () => {
    const [activeFilter, setActiveFilter] = useState("Все направления");

    const handleButtonClick = (direction) => {
        localStorage.setItem("direction", direction);
        setActiveFilter(direction); // Устанавливаем активный фильтр при нажатии
    };

    return (
        <Container className="my-14 px-9 flex flex-col gap-10">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem className="hidden md:block">
                        <BreadcrumbLink href="/">Главная</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Все курсы</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="flex items-center justify-between">
                <p className="text-[32px] font-medium">Курсы</p>
                <div className="flex items-center gap-2 max-w-lg flex-1">
                    <Input placeholder="Найти курс" className="px-5" />
                    <Button className="px-12">Найти курс</Button>
                </div>
            </div>

            {/* Фильтры по направлениям */}
            <div className="flex flex-wrap gap-3">
                {directions.map((direction) => (
                    <Button
                        variant={"ghost"}
                        key={direction}
                        onClick={() => handleButtonClick(direction)} // Обработчик клика для фильтра
                        className={`border border-black rounded-[50px] hover:bg-black hover:text-white transition duration-300 
                            ${
                                activeFilter === direction
                                    ? "bg-black text-white"
                                    : ""
                            }`}
                    >
                        {direction}
                    </Button>
                ))}
            </div>
        </Container>
    );
};

export default CoursesPage;
