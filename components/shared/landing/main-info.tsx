"use client";

import React, { useEffect, useState } from "react";
import { Container } from "../container";
import { Input } from "@/components/ui";
import { Search, Star } from "lucide-react";
import { toast } from "sonner";

interface Props {
    className?: string;
}

export const MainInfoBlock: React.FC<Props> = ({ className }) => {
    const [rating, setRating] = useState<string | null>(null);
    const [search, setSearch] = useState<string>(""); // Добавляем состояние для поиска

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value); // Обновляем значение состояния при вводе
    };

    const handleClick = () => {
        if (!search) {
            // Проверяем, не пустое ли значение
            toast.error("Поле поиска пустое");
        } else {
            // TODO : Добавить логику поиска
            toast.success(`Выполнен поиск с запросом ${search}`, {
                style: {
                    background: "#4CAF50",
                    color: "#FFFFFF",
                    borderRadius: "8px",
                },
                duration: 5000,
            });
        }
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("rating", "5.0");
        }

        const storedRating = localStorage.getItem("rating");
        setRating(storedRating);
        console.log(storedRating);
    }, []);

    return (
        <Container className="flex items-center gap-24 py-32 px-16">
            {/* Левая часть */}
            <div className="flex flex-col items-start gap-6">
                <p className="uppercase text-[--purple] text-xl">
                    НАЧНИ ПУТЬ К УСПЕХУ
                </p>
                <h1 className="text-4xl leading-[72px]">
                    Доступ к более{" "}
                    <span className="text-[--purple]">5000+</span> <br />
                    курсам от <span className="text-[--purple]">300</span>{" "}
                    преподавателей и
                    <br />
                    платформы
                </h1>
                <p className="text-lg text-[#98A0AA]">
                    Various versions have evolved over the years, sometimes by
                    accident.
                </p>
                <div className="flex w-full items-center gap-4">
                    <Input
                        className="bg-white dark:placeholder:text-[#CCCCCC] drop-shadow-xl dark:bg-[#434343] p-6"
                        placeholder="Что вы хотите изучать?"
                        value={search}
                        onChange={handleSearchChange}
                        onKeyDown={(event) => {
                            if (event.key === "Enter") {
                                handleClick();
                            }
                        }}
                    />
                    <Search onClick={handleClick} />
                </div>
            </div>

            {/* Правая часть с изображениями и рейтингом */}
            <div className="relative flex items-center">
                <img src="/Card1.png" alt="main-info-img" className="-mr-16" />
                <img src="/Card2.png" alt="main-info-img" />

                {/* Блок рейтинга */}
                <div className="absolute bottom-4 -right-12 shadow-2xl flex items-center gap-3 px-[14px] py-[12px] bg-white dark:bg-[--bg-gray] rounded-[8px]">
                    <div className="p-2 bg-[#FFF7EE] dark:bg-[#FFF7EE] rounded-[6px]">
                        <Star
                            width={20}
                            height={20}
                            className="fill-[--yellow] stroke-[--yellow]"
                        />
                    </div>
                    <div className="flex items-center gap-2 text-[#52565C] dark:text-white">
                        {rating}
                        <div className="">Рейтинг</div>
                    </div>
                </div>
            </div>
        </Container>
    );
};
