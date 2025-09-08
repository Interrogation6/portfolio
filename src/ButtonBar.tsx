//import { Link } from "react-router-dom";

function ButtonBar() {
    return (
        <nav aria-label="Seções do portfólio">
          <div className="menu-row container">
            <div className="row row-cols-2 row-cols-md-4 g-3 justify-content-center">
              <div className="col">
                <a className="btn btn-outline-primary w-100 py-3" href="#sobre-mim">Sobre mim</a>
              </div>
              <div className="col">
                <a className="btn btn-outline-primary w-100 py-3" href="#projetos">Projetos</a>
              </div>
              <div className="col">
                <a className="btn btn-outline-primary w-100 py-3" href="#experiencias">Experiencias</a>
              </div>
              <div className="col">
                <a className="btn btn-outline-primary w-100 py-3" href="#contatos">Contatos</a>
              </div>
            </div>
          </div>
        </nav>
    )
}
export default ButtonBar;