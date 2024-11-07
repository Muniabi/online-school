"use client";

import React from "react";
import CategoryCard from "@/components/shared/landing/category-card";
import {
    PenTool,
    FileCode2,
    MicVocal,
    BriefcaseBusiness,
    Sunrise,
    Camera,
    Music2,
    Database,
    Lightbulb,
    HeartPulse,
    BadgeRussianRuble,
    GraduationCap,
} from "lucide-react";
import { Container } from "@/components/shared/container";

export interface CategoryData {
    name: string;
    icon: React.ComponentType<any>;
}

const categories: CategoryData[] = [
    {
        name: "Дизайн",
        icon: PenTool,
    },
    {
        name: "Разработка",
        icon: FileCode2,
    },
    {
        name: "Маркетинг",
        icon: MicVocal,
    },
    {
        name: "Бизнес",
        icon: BriefcaseBusiness,
    },
    {
        name: "Lifestyle",
        icon: Sunrise,
    },
    {
        name: "Photography",
        icon: Camera,
    },
    {
        name: "Музыка",
        icon: Music2,
    },
    {
        name: "Data Science",
        icon: Database,
    },
    {
        name: "Personal Develop",
        icon: Lightbulb,
    },
    {
        name: "Helth & Fitness",
        icon: HeartPulse,
    },
    {
        name: "Finance",
        icon: BadgeRussianRuble,
    },
    {
        name: "Teaching",
        icon: GraduationCap,
    },
];

const PopularCategories: React.FC = () => {
    return (
        <Container className="p-24">
            <div className="flex flex-col rounded-none">
                <h2 className="z-10 self-start mt-0 text-3xl font-semibold dark:text-white text-black">
                    Самые <span className="text-violet-500">популярные</span>{" "}
                    <span className="text-violet-500">Категории</span>
                </h2>
                <p className="self-start mt-1.5 mb-12 text-xl leading-snug text-zinc-500">
                    Various versions have evolved over the years, sometimes by
                    accident,
                </p>
                <div className="grid grid-cols-4 gap-6">
                    {categories.map((category, index) => (
                        <CategoryCard key={index} {...category} />
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default PopularCategories;
