import { useMemo, useState } from "react";
import { MainContext } from "../contexts/mainContext";

export function MainProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [start, setStart] = useState(false);
  const [introHidden, setIntroHidden] = useState(false);

  const value = useMemo(
    () => ({
      start,
      setStart,
      introHidden,
      setIntroHidden,
    }),
    [start,
    introHidden
    ]
  );

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
}
