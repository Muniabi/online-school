import React from "react";
import { Container } from "../container";
import { Input } from "@/components/ui";
import { Star } from "lucide-react";

interface Props {
    className?: string;
}

export const MainInfoBlock: React.FC<Props> = ({ className }) => {
    const raiting = "5.0";
    return (
        <Container className="flex items-center gap-24 py-32 px-10">
            {/* Левая часть */}
            <div className="flex flex-col items-start gap-6">
                <p className="uppercase text-[--purple] text-xl">
                    НАЧНИ ПУТЬ К УСПЕХУ
                </p>
                <h1 className="text-3xl leading-[72px]">
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
                <Input
                    className="bg-[#434343] p-6"
                    placeholder="Что вы хотите изучать?"
                />
            </div>

            {/* Правая часть с изображениями и рейтингом */}
            <div className="relative flex items-center">
                <img src="/Card1.png" alt="main-info-img" className="-mr-16" />
                <img src="/Card2.png" alt="main-info-img" />

                {/* Блок рейтинга */}
                <div className="absolute bottom-4 -right-10 flex items-center gap-3 px-[14px] py-[12px] bg-[--bg-gray] rounded-[8px]">
                    <div className="p-2 bg-[#FFF7EE] rounded-[6px]">
                        <Star
                            width={20}
                            height={20}
                            className="fill-[--yellow] stroke-[--yellow]"
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        {raiting}
                        <div>Рейтинг</div>
                    </div>
                </div>
            </div>
        </Container>
    );
};
