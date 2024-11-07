import { MainInfoBlock } from "@/components/shared/landing/main-info";
import PopularCourses from "@/components/shared/landing/popular-courses";
import PopularCategories from "@/components/shared/landing/popular-categories";
import BestAuthors from "@/components/shared/landing/best-authors";

export default function Home() {
    return (
        <main className="dark:bg-[--bg-color-dark]">
            <MainInfoBlock />
            <PopularCourses />
            <PopularCategories />
            <BestAuthors />
        </main>
    );
}
