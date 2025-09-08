import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

export default function RouteFadeSlide({ children }: PropsWithChildren) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }}
      exit={{ opacity: 0, x: 200, transition: { duration: 0.3, ease: [0.4, 0, 1, 1] } }}
      style={{ width: "100%" }}
    >
      {children}
    </motion.div>
  );
}