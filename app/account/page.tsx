"use client";

import React, { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonDemo() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<{
        name: string;
        description: string;
    } | null>(null);

    // Имитация загрузки данных
    useEffect(() => {
        const fetchData = async () => {
            // Задержка для имитации загрузки данных
            await new Promise((resolve) => setTimeout(resolve, 2000));

            // Замените на реальную загрузку данных
            setData({
                name: "Название продукта",
                description: "Описание продукта.",
            });

            // Устанавливаем состояние загрузки в false
            setLoading(false);
        };

        fetchData();
    }, []);

    return (
        <div className="flex items-center space-x-4 m-2">
            {loading ? (
                // Показать скелетон во время загрузки
                <div className="flex items-center space-x-4">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-[250px]" />
                        <Skeleton className="h-4 w-[200px]" />
                    </div>
                </div>
            ) : (
                // Показать данные после загрузки
                <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-full bg-gray-300" />
                    <div className="space-y-2">
                        <h2 className="text-lg font-semibold">{data?.name}</h2>
                        <p className="text-sm text-gray-600">
                            {data?.description}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
