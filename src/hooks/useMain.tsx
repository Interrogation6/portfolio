import { useContext } from "react";
import { MainContext } from "../contexts/mainContext";

export function useMain() {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error("useMain deve ser usado dentro de um LoginProvider");
  }
  return context;
}