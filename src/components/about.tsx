import React, { useState } from "react";
import { Globe } from "lucide-react";

type Lang = "pt" | "en";

const about: Record<Lang, string[]> = {
  pt: [
    "Olá! Sou Kelvyn Dantas Leal e estou cursando Engenharia de Software na PUC Minas no Coração Eucarístico. Tenho experiência em análise de dados, visualização de dados e ciência de dados, com habilidades em Python, SQL, Power BI e Excel.",
    "Sou apaixonado por transformar dados em insights acionáveis visíveis em designs completamente customizados. Possuo alguns projetos no meu GitHub pessoal que compoem meus hobbies e estudos na área de programação em geral. Assim como este site! Usei meu conhecimento e minhas ferramentas para torná-lo interativo e completamente 'atrativo'."
  ],
  en: [
    "Hello! I’m Kelvyn Dantas Leal, currently studying Software Engineering at PUC Minas, Coração Eucarístico campus. I have experience in data analysis, data visualization, and data science, with skills in Python, SQL, Power BI, and Excel.",
    "I am passionate about transforming data into actionable insights visible through fully customized designs. I have several projects on my personal GitHub that reflect my hobbies and studies in general programming. Just like this website! I used my knowledge and tools to make it interactive and fully engaging."
  ],
};


export default function About() {
  const [lang, setLang] = useState<Lang>("pt");
  const [visible, setVisible] = useState(true);

  const toggleLang = () => {
    setVisible(false);

    setTimeout(() => {
      setLang(lang === "pt" ? "en" : "pt");
      setVisible(true);
    }, 500);
  };

  return (
    <section className="max-w-3xl">
  <div className="text-end">
    <button className="!rounded-3xl !p-2" onClick={toggleLang}>
      <Globe />
    </button>
  </div>

  <div className={`fugaz-one-regular !font-thin transition-opacity duration-500 space-y-4 ${visible ? "opacity-100" : "opacity-0"} pl-4`}>
  {about[lang].map((line, index) => (
    <p key={index}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {line}
    </p>
  ))}
</div>


</section>
  );
}
