const about: string[] =
    [
        "I’ve always had a passion for logic and programming, and throughout my career, I’ve turned this interest into a solid technical foundation. I have experience in various areas of software development, including web interfaces, databases, game development, and simulations.",
        "Early in my life, I managed digital communities for game servers, where I developed skills in direct communication with users, identifying requirements, and adapting existing projects to enhance the player experience.",
        "Professionally, I had the opportunity to work at Wedios, where I was responsible for designing microprocessor modules for home automation. Here, I managed the customization of functionalities based on the limitations and specific requirements of each client, always mindful of the interfaces and their integrations with other electronic components.",
        "During my time at Nel Cloud, I was responsible for the maintenance and on-demand development of databases and their frameworks, always focusing on meeting the specific needs of the projects. In addition, I worked on Power BI projects, developing the project in a full-stack capacity, covering all aspects from its interface to the implementation of its ETL.",
        "Additionally, I am part of the pioneering team in Brazil working with GaussDB, Huawei Cloud's database system, where our focus is to demonstrate this technology as a more viable option for Big Data in the Brazilian market, highlighting its advantages and collaborating on adapting the system to local needs.",
        "-- Kelvyn Dantas"
    ];



export default function Experience() {

    return (
        <>
            <div className="space-y-1 mb-10">
                <h2 className="text-2xl font-semibold text-cyan-50">Analista de Dados - Nel Cloud - 2022 a 2025</h2>
                <p>- Power BI</p>
                <p>- Power Query</p>
                <p>- Power Automate</p>
                <p>- SQL</p>
                <p>- Modelagem de Dados</p>
                <p>- Design de Dashboards</p>
            </div>
            <div className="space-y-1 mb-10">
                <h2 className="text-2xl font-semibold text-cyan-50">Produtor Técnio - W2D2 - 2018 a 2021</h2>
                <p>- Automação Residencial</p>
                <p>- Design de Produtos</p>
                <p>- Design Eletrônico</p>
            </div>
            <section className="max-w-3xl mt-10">
                <div className={`fugaz-one-regular !font-thin transition-opacity duration-500 space-y-4 pl-4`}>
                    {about.map((line, index) => (
                        <p key={index}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {line}
                        </p>
                    ))}
                </div>
            </section>
        </>
    );
}
