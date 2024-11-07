"use client";

import React from "react";
import { Container } from "../container";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge, Button } from "@/components/ui";
import { ArrowUpRight } from "lucide-react";

const coursesData = [
    {
        id: 1,
        title: "Основы HTML",
        type: "HTML",
        image: "/popular-courses/course1.png",
        rating: 4.5,
        reviewsCount: 150,
        price: "5000₽",
    },
    {
        id: 2,
        title: "Design с нуля",
        type: "Design",
        image: "/popular-courses/course2.png",
        rating: 4.8,
        reviewsCount: 250,
        price: "7500₽",
    },
    {
        id: 3,
        title: "Основы Business",
        type: "Business",
        image: "/popular-courses/course3.png",
        rating: 4.7,
        reviewsCount: 300,
        price: "4500₽",
    },
    {
        id: 4,
        title: "Social Media",
        type: "Social Media",
        image: "/popular-courses/course4.png",
        rating: 4.9,
        reviewsCount: 500,
        price: "10000₽",
    },
];

interface PopularCoursesProps {
    className?: string;
}

const PopularCourses = ({ className }: PopularCoursesProps) => {
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
            <Container className="flex md:gap-0 md:flex-row gap-8 flex-col items-center justify-evenly py-24">
                {/* Левая часть */}
                <div className="text-5xl font-[600] leading-[72px]">
                    <p
                        className={`transition-opacity duration-500 ${
                            current === 1 ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        Самые <br />
                        <span className="text-[--purple]">
                            Популярные <br /> Курсы
                        </span>
                    </p>
                </div>

                {/* Слайдер */}
                <Carousel setApi={setApi} className="w-full max-w-xs">
                    <CarouselContent className="">
                        {coursesData.map((course) => (
                            <CarouselItem key={course.id}>
                                <div>
                                    <Card className="bg-white dark:bg-white">
                                        <CardContent className="p-4">
                                            {/* Картинка Курса */}
                                            <div className="relative p-0 m-0">
                                                <img
                                                    src={course.image}
                                                    alt={course.title}
                                                    className="w-full object-cover rounded-lg aspect-[12/9]"
                                                />
                                                <Badge className="absolute top-2 left-2 text-sm border-none px-2 py-1 text-black dark:text-white rounded-md bg-white hover:bg-white dark:bg-[#1F221F]">
                                                    {course.type}
                                                </Badge>
                                            </div>
                                            <h3 className="pt-2 text-xl text-[#363A3D] dark:text-[#] font-medium">
                                                {course.title}
                                            </h3>
                                            <div className="flex mt-2 space-x-2">
                                                <span className="text-[--yellow]">
                                                    ⭐⭐⭐⭐⭐
                                                </span>
                                                <span className="text-gray-400">
                                                    ({course.reviewsCount})
                                                </span>
                                            </div>
                                        </CardContent>
                                        <CardFooter className=" border-t border-[#E7E9EB]">
                                            {/* Информация о курсе */}
                                            <div className="flex items-center justify-between w-full mt-4">
                                                <p className="text-lg text-black font-semibold">
                                                    {course.price}
                                                </p>
                                                <Button variant="secondary">
                                                    <ArrowUpRight className="h-4 w-4" />
                                                </Button>
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

export default PopularCourses;
