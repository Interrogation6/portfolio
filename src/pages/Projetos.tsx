import "./Projetos.css"

export default function Projetos() {
  return (
    <section>
      <h1 style={{ marginBottom: "0.5cm"}}>Projetos</h1>
      <div className="row row-cols-1 row-cols-lg-3 row-cols-sm-2">
        <div className="col flex-item">
          <h2>Site Portfólio Pessoal</h2>
          <p>Site Portfólio Pessoal<br/>
          Tecnologias Usadas: React, Vite, Node & Bootstrap</p>
          <h3>Link de acesso:</h3>
          <p>https://github.com/Interrogation6/portfolio</p>
          <img src="/assets/projeto1.png" alt="Projeto 1" className="img-fluid" />
          </div>
        <div className="col flex-item">
          <h2>Projeto N.2</h2>
          <p>Eu tenho outros projetos porem eles sao pessoais</p>
        </div>
        <div className="col flex-item">
          <h2>Projeto N.3</h2>
          <p>Eu tenho outros projetos porem eles sao pessoais</p>
        </div>
      </div>
    </section>
  );
}
