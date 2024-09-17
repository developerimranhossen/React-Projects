import { motion } from "framer-motion";

function Simple() {
  return (
    <motion.div
      className="size-36 bg-red-500 rounded-full border"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{opacity: 1, scale: 1}}
      transition={{duration: 1}}
    />
  );
}

export default Simple;
