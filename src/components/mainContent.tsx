//import React from "react";

import { Github, Linkedin } from "lucide-react";
import { RiDiscordLine } from "react-icons/ri";
import { ImSteam } from "react-icons/im";
import { useMain } from "../hooks/useMain";
import About from "./about";
import React, { useState } from "react";

export default function MainContent() {
    const { introHidden } = useMain();
        return (
            <div className={`flex mx-50 mt-40 transition-opacity duration-500 ease-in ${introHidden ? "opacity-100" : "opacity-0"}`}>
                <div className="w-2/5 p-4 mt-8 h-200 items-center">
                    <LeftColumn/>
                </div>
                <div className="w-3/5 p-4 ">
                    <ContentTabs />
                </div>
            </div>
        );
}

type TabKey = "sobre" | "projetos" | "experiencia" | "contato";

function ContentTabs() {
    const [tab, setTab] = useState<TabKey>("sobre");
    const [displayTab, setDisplayTab] = useState<TabKey>(tab);
    const [visible, setVisible] = useState(true);

    const tabs: { key: TabKey; label: string }[] = [
        { key: "sobre", label: "Sobre" },
        { key: "projetos", label: "Projetos" },
        { key: "experiencia", label: "Experiencia" },
        { key: "contato", label: "Contato" },
    ];

    const switchTab = (newTab: TabKey) => {
        if (newTab === tab) return;
        // update selected tab (button highlight) immediately
        setTab(newTab);
        // fade out current content
        setVisible(false);
        // after fade-out, change displayed content and fade back in
        setTimeout(() => {
            setDisplayTab(newTab);
            setVisible(true);
        }, 500);
    };

    return (
        <div>
            <div className="flex space-x-10 mb-10 items-center max-w-3xl">
                {tabs.map((t) => (
                    <button
                        className="text-2xl font-bold flex-1"
                        key={t.key}
                        onClick={() => switchTab(t.key)}
                    >
                        {t.label}
                    </button>
                ))}
            </div>

            <div className={`transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}>
                {displayTab === "sobre" && <About />}
                {displayTab === "projetos" && (
                    <div>
                        <h3 className="text-xl font-semibold text-cyan-50">Projetos</h3>
                        <p className="mt-2 text-cyan-50/90">Lista de projetos vai aqui.</p>
                    </div>
                )}
                {displayTab === "experiencia" && (
                    <div>
                        <h3 className="text-xl font-semibold text-cyan-50">Experiencia</h3>
                        <p className="mt-2 text-cyan-50/90">Experiências profissionais e competências.</p>
                    </div>
                )}
                {displayTab === "contato" && (
                    <div>
                        <h3 className="text-xl font-semibold text-cyan-50">Contato</h3>
                        <p className="mt-2 text-cyan-50/90">Informações de contato e formulário.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

function LeftColumn() {
    const buttonStyle = "!p-2 !rounded-full !text-cyan-50 active:opacity-50";
    return (
        <div className="float-right">
                        <img src="https://media.licdn.com/dms/image/v2/D4D03AQGaqFcAZiS4nQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1705639077286?e=1767225600&v=beta&t=LASEsuKdsUpN_yhd0wgPpxj-GKsBQXbFQ490MeMrGiE"
                            alt="Profile"
                            className="rounded-full border-4 border-gray-600 opacity-90 brightness-80 size-60 mx-10" />

                        <div className="fugaz-one-regular !font-thin text-3xl my-2 text-cyan-50">Kelvyn Dantas Leal</div>
                        <div className="fugaz-one-regular !font-thin text-xl my-2 text-cyan-50/90 ml-2">Analista de Dados</div>
                        <div className="flex space-x-2 justify-center mt-4">
                            <button
                                className={`${buttonStyle}`}
                                onClick={() => window.open('http://github.com/interrogation6', '_blank', 'noopener,noreferrer')}
                            >
                                <Github className="size-10" />
                            </button>
                            <button
                                className={`${buttonStyle}`}
                                onClick={() => window.open('https://www.linkedin.com/in/kelvyn-dantas/', '_blank', 'noopener,noreferrer')}
                            >
                                <Linkedin className="size-10" />
                            </button>
                            <button 
                                className={`${buttonStyle}`}
                                onClick={() => window.open('https://discord.com/users/317051908885970945', '_blank', 'noopener,noreferrer')}
                                >
                                <RiDiscordLine className="size-10" />
                            </button>
                            <button 
                                className={`${buttonStyle}`}
                                onClick={() => window.open('https://steamcommunity.com/id/interrogation6/', '_blank', 'noopener,noreferrer')}
                                >
                                <ImSteam className="size-10" />
                            </button>
                        </div>
                    </div>
    );
}