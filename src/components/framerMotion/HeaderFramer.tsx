import { motion } from "framer-motion";

const HeaderFramer = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="overflow-hidden mb-10">
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: "0%", transition: { duration: 0.5 } }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default HeaderFramer;
