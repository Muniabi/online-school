import { Container } from "../container";
import githublogo from "@/public/github.png";
import vklogo from "@/public/vk.png";
import googlelogo from "@/public/google.png";
import IntegrationsColumn from "./IntegrationsColumn";

const integrations = [
    {
        name: "Figma",
        icon: vklogo,
        description:
            "Figma is a collaborative design tool that allows you to present and prototype your ideas to your team.",
    },
    {
        name: "Sketch",
        icon: googlelogo,
        description:
            "Sketch is a collaborative design tool that allows you to present and prototype your ideas to your team.",
    },
    {
        name: "Adobe XD",
        icon: githublogo,
        description:
            "Adobe XD is a vector-based user experience design tool for web apps and mobile apps.",
    },
    {
        name: "InVision",
        icon: githublogo,
        description:
            "InVision is a digital product design platform that enables teams to collaborate, prototype, and test designs.",
    },
    {
        name: "Zeplin",
        icon: googlelogo,
        description:
            "Zeplin is a collaboration tool for UI designers and front-end developers.",
    },
    {
        name: "Notion",
        icon: googlelogo,
        description:
            "Notion is a popular tool for note-taking, project management, and collaboration.",
    },
    {
        name: "Slack",
        icon: vklogo,
        description:
            "Slack is a communication platform for teams that allows you to stay connected and work together.",
    },
    {
        name: "Trello",
        icon: githublogo,
        description:
            "Trello is a visual project management tool that allows you to organize and prioritize your tasks and projects.",
    },
    {
        name: "Asana",
        icon: googlelogo,
        description:
            "Asana is a work management platform that allows you to track and manage your work and projects.",
    },
];

export type IntegrationsType = typeof integrations;

export default function Integrations() {
    return (
        <section className="overflow-hidden bg-black">
            <Container className="mx-9">
                <div className="grid lg:grid-cols-2 items-center lg:gap-16">
                    <div className="">
                        <h2 className="text-6xl font-medium">
                            Plays well with{" "}
                            <span className="text-primary">others</span>
                        </h2>
                        <p className="text-white/50 mt-4 text-lg">
                            Layers seamlessly connects with your favorite too it
                            easy to plug into any workflow and collaboratel
                            platforms.
                        </p>
                    </div>
                    <div className="">
                        <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                            <IntegrationsColumn integrations={integrations} />
                            <IntegrationsColumn
                                integrations={integrations.slice().reverse()}
                                className="hidden md:flex"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
