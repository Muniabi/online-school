"use client";

import React from "react";
import { Container } from "@/components/shared/container";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const authorsData = [
    {
        id: 1,
        name: "Дмитрий Васильев",
        type: "UI-UX Эксперт",
        image: "/best-authors/author1.png",
    },
    {
        id: 2,
        name: "Ольга Кузнецова",
        type: "Эксперт по соц. сетям",
        image: "/best-authors/author2.png",
    },
    {
        id: 3,
        name: "Александр Морозов",
        type: "Эксперт по бизнес-идеям",
        image: "/best-authors/author3.png",
    },
    {
        id: 4,
        name: "Марина Белова",
        type: "Эксперт по фотографиям",
        image: "/best-authors/author4.png",
    },
];

interface PopularCoursesProps {
    className?: string;
}

const BestAuthors = ({ className }: PopularCoursesProps) => {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);

    React.useEffect(() => {
        if (!api) {
            return;
        }

        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return (
        <div className="bg-[#FFF7EE] dark:bg-[#242424] overflow-hidden">
            <Container className="p-24">
                {/* Левая часть */}
                <div className="text-4xl font-[600] leading-[72px]">
                    <p className="">
                        Наши{" "}
                        <span className="text-violet-500">лучшие Авторы</span>
                    </p>
                    <p className="self-start mt-1.5 mb-12 text-xl leading-snug text-zinc-500">
                        Various versions have evolved over the years, sometimes
                        by accident,
                    </p>
                </div>

                {/* Слайдер */}
                <Carousel setApi={setApi} className="w-full max-w-xs">
                    <CarouselContent className="">
                        {authorsData.map((author) => (
                            <CarouselItem key={author.id}>
                                <div>
                                    <Card className="bg-white dark:bg-white">
                                        <CardContent className="p-4">
                                            {/* Картинка Курса */}
                                            <div className="relative p-0 m-0">
                                                <img
                                                    src={author.image}
                                                    alt={author.name}
                                                    className="w-full object-cover rounded-lg aspect-[10/9]"
                                                />
                                            </div>
                                        </CardContent>
                                        <CardFooter>
                                            {/* Информация о курсе */}
                                            <div className="mx-auto text-center">
                                                <p className="pt-2 text-xl text-[#363A3D] dark:text-[#]">
                                                    {author.name}
                                                </p>
                                                <p className="text-lg text-violet-500">
                                                    {author.type}
                                                </p>
                                            </div>
                                        </CardFooter>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="py-4 flex items-center justify-center gap-4">
                        <CarouselPrevious />
                        <CarouselNext />
                    </div>
                </Carousel>
            </Container>
        </div>
    );
};

export default BestAuthors;
