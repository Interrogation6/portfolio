import ButtonBar from "./ButtonBar";
import "./Content.css";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  initial: { opacity: 0, x: -24 },             // new page starts slightly left
  animate: {
    opacity: 1, x: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] }
  },
  exit: {
    opacity: 0, x: 24,                         // old page slides right as it fades
    transition: { duration: 0.25, ease: [0.4, 0, 1, 1] }
  }
};

export default function Content() {
  const location = useLocation();
  return (
    <div className="page-wrap">
      <main className="content">
        <ButtonBar />
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}           // re-animate on each route
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ width: "100%" }}
            >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
