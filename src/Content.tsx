import ButtonBar from "./ButtonBar";
import "./Content.css";
import { Outlet } from "react-router-dom";


export default function Content() {
  return (
    <div className="page-wrap">
      <main className="content">
        <ButtonBar />
        <Outlet />
      </main>
    </div>
  );
}
