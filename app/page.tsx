"use client";
import { MainInfoBlock } from "@/components/shared/landing/main-info";
import { ContainerScroll } from "@/components/shared/landing/container-scroll-animation";
import PopularCourses from "@/components/shared/landing/popular-courses";
import PopularCategories from "@/components/shared/landing/popular-categories";
import BestAuthors from "@/components/shared/landing/best-authors";
import Integrations from "@/components/shared/landing/Integrations";
import Image from "next/image";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/shared/landing/lamp";

export default function Home() {
    return (
        <main className="dark:bg-[--bg-color-dark]">
            <div className="flex flex-col overflow-hidden">
                <ContainerScroll
                    titleComponent={
                        <>
                            <h1 className="text-4xl font-semibold text-black dark:text-white">
                                Открой возможности <br />
                                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                                    IT-образования
                                </span>
                            </h1>
                        </>
                    }
                >
                    <Image
                        src={`/linear.png`}
                        alt="hero"
                        height={1402}
                        width={2866}
                        className="mx-auto rounded-2xl object-cover h-full object-left-top"
                        draggable={false}
                    />
                </ContainerScroll>
            </div>
            <MainInfoBlock />
            <PopularCourses />
            <LampContainer>
                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                >
                    Популярные курсы <br /> от лучших авторов
                </motion.h1>
            </LampContainer>
            <Integrations />
            <PopularCategories />
            <BestAuthors />
        </main>
    );
}
