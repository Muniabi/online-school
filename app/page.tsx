import { MainInfoBlock } from "@/components/shared/landing/main-info";
import { ContainerScroll } from "@/components/shared/landing/container-scroll-animation";
import PopularCourses from "@/components/shared/landing/popular-courses";
import PopularCategories from "@/components/shared/landing/popular-categories";
import BestAuthors from "@/components/shared/landing/best-authors";
import Integrations from "@/components/shared/landing/Integrations";
import Image from "next/image";

export default function Home() {
    return (
        <main className="dark:bg-[--bg-color-dark]">
            <div className="flex flex-col overflow-hidden">
                <ContainerScroll
                    titleComponent={
                        <>
                            <h1 className="text-4xl font-semibold text-black dark:text-white">
                                Unleash the power of <br />
                                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                                    Scroll Animations
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

            <Integrations />
            <PopularCategories />
            <BestAuthors />
        </main>
    );
}
