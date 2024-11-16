import Link from "next/link";
import React from "react";

interface Props {
    className?: string;
}

const CreateCoursePage: React.FC<Props> = ({ className }) => {
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
                <div className="mx-auto max-w-xl text-center">
                    <h1 className="text-3xl text-primary font-extrabold sm:text-5xl">
                        AI Генератор курсов
                        <strong className="font-extrabold text-black sm:block">
                            {" "}
                            Increase Conversion.{" "}
                        </strong>
                    </h1>

                    <p className="mt-4 sm:text-xl/relaxed">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Nesciunt illo tenetur fuga ducimus numquam ea!
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Link
                            className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-purple-700 focus:outline-none focus:ring active:bg-purple-500 sm:w-auto"
                            href="/create/dashboard"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CreateCoursePage;
