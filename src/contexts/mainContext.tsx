import { createContext } from "react";

export type MainContextType = {
    start: boolean;
    setStart: React.Dispatch<React.SetStateAction<boolean>>;
    introHidden: boolean;
    setIntroHidden: React.Dispatch<React.SetStateAction<boolean>>;
};
export const MainContext = createContext<MainContextType | null>(null);