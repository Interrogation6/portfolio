import "./Experiencias.css"

export default function Experiencias() {
  return (
    <section>
      <h2>Experiências</h2>
      <p>Experiencias de trabalho ou estudo?<br/></p>
      <p>Experiencias estariam organizadas assim:</p>
      <div className="entry">
        <h3>Experiencia 1</h3>
        <p>Cada experiencia seria uma linha só, as vezes separadas com grids do Bootstrap quando necessário.</p>
      </div>
      <div className="entry">
        <h3>Experiencia 2</h3>
        <div className="row row-cols-lg-3 row-cols-sm-2">
          <div className="col">
            <p>Separados</p>
          </div>
          <div className="col">
            <p>Em suas</p>
          </div>
          <div className="col">
            <p>Linhas especificas</p>
          </div>
        </div>
        <div className="row row-cols-lg-2 row-cols-sm-1">
          <div className="col">
            Dando margem pra colocar imagens maiores em layouts diferentes
          </div>
          <div className="col">
            Sem perder a responsividade.
          </div>
        </div>
      </div>
      <div className="entry">
        <h3>Experiencia 3</h3>
        <p>Eh isso ai</p>
      </div>
    </section>
  );
}
