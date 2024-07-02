import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { trusted } from "mongoose";

interface SkillItemProps {
  Logo: React.ReactNode;
  Heding: string;
  Bg_color: string;
  index: number;
}

const SkillItem: React.FC<SkillItemProps> = ({
  Logo,
  Heding,
  Bg_color,
  index,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, x: index % 2 === 0 ? -200 : 200, rotate: -10 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        duration: 0,
        delay: 0,
        type: "spring",
        stiffness: 100,
      },
    },
  };
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={cardVariants}
      whileHover="hover"
      className="col-span-6 hover:shadow-black transition-all duration-300 ease-in"
    >
      <motion.div className="inner-card">
        <div
          className={`flex items-center border-2 border-slate-900 p-4 ${Bg_color}`}
        >
          <div className="flex justify-center items-center h-[50px] w-[50px] border-2 text-3xl border-slate-900">
            {Logo}
          </div>
          <h6 className="pl-4 text-base font-semibold">{Heding}</h6>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SkillItem;
