import React from "react";
import SkillCategory from "./SkillCategory";
import { Languages } from "./Languages";
import { Database } from "./Database";
import { Frameworks } from "./Frameworks";
import { Technologies } from "./Technologies";

const Skills = () => {
  return (
    <section
      className="lg:py-24 md:py-20 min-[320px]:py-10 lg:pb-15 md:pb-8 sm:pb-10"
      id="Skills"
    >
      <div className="container">
        <div className="lg:pb-10 md:pb-6 text-center text-5xl font-semibold">
          <p>My Skills</p>
        </div>
        <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1">
          <div className="lg:col-span-6 lg:pl-9">
            <SkillCategory title="Technologies" skills={Technologies} />
            <SkillCategory title="Databases" skills={Database} />
          </div>
          <div className="lg:col-span-6 text-center md:pt-0 lg:pl-7 md:pl-7">
            <SkillCategory title="Frameworks" skills={Frameworks} />
            <SkillCategory title="Languages" skills={Languages} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
