import { MainInfoBlock } from "@/components/shared/landing/main-info";
import PopularCourses from "@/components/shared/landing/popular-courses";

export default function Home() {
    return (
        <main className="dark:bg-[--bg-color-dark]">
            <MainInfoBlock />
            <PopularCourses />
        </main>
    );
}
