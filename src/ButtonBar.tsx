import { Link } from "react-router-dom";

function ButtonBar() {
    return (
        <nav aria-label="Seções do portfólio">
          <div className="menu-row">
            <Link className="btn btn-outline-primary btn-lg px-4 py-3" to="/">
              Sobre mim
            </Link>
            <span className="v-sep" aria-hidden="true" />
            <Link className="btn btn-outline-primary btn-lg px-4 py-3" to="/projetos">
              Projetos
            </Link>
            <span className="v-sep" aria-hidden="true" />
            <Link className="btn btn-outline-primary btn-lg px-4 py-3" to="/experiencias">
              Experiencias
            </Link>
            <span className="v-sep" aria-hidden="true" />
            <Link className="btn btn-outline-primary btn-lg px-4 py-3" to="/contatos">
              Contatos
            </Link>
          </div>
        </nav>
    )
}
export default ButtonBar;