import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

  return (
    <motion.div
      ref={ref}
      initial={{ y: 100, x: index % 2 === 0 ? 100 : -10 }}
      animate={inView ? { y: 0, x: 0 } : {}}
      transition={{ duration: 0.2 }}
      className="col-span-6 hover:shadow-black transition-all duration-300 ease-in"
    >
      <div
        className={`flex items-center border-2 border-slate-900 p-4 ${Bg_color}`}
      >
        <div className="flex justify-center items-center h-[50px] w-[50px] border-2 text-3xl border-slate-900">
          {Logo}
        </div>
        <h6 className="pl-4 text-base font-semibold">{Heding}</h6>
      </div>
    </motion.div>
  );
};

export default SkillItem;
