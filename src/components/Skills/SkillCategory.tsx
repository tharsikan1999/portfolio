import React from "react";
import SkillItem from "./SkillItem";

interface SkillItemProps {
  Logo: React.ReactNode;
  Heding: string;
  Bg_color: string;
}

interface SkillCategoryProps {
  title: string;
  skills: SkillItemProps[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <div>
      <div className="lg:pb-7 pt-10 md:pb-10 pb-8 text-4xl font-semibold text-center">
        <p>{title}</p>
      </div>
      <div className="grid gap-4 grid-cols-12 cursor-pointer">
        {skills.map((skill, index) => (
          <SkillItem
            key={index}
            Logo={skill.Logo}
            Heding={skill.Heding}
            Bg_color={skill.Bg_color}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
