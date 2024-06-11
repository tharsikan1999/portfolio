import { FaLaravel, FaAngular, FaReact } from "react-icons/fa";
import { DiNodejsSmall } from "react-icons/di";
import { SiSpringboot , SiTailwindcss,SiNextdotjs} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

export const Frameworks = [
    {
        Bg_color: "bg-[#6DB33F]",
        Logo: <SiSpringboot />,
        Heding: "Spring Boot",
    },
    {
        Bg_color: "bg-[#e74430]",
        Logo: <FaLaravel />,
        Heding: "Laravel",
    },
    {
        Bg_color: "bg-[#92b5ff]",
        Logo: <FaAngular />,
        Heding: "Angular",
    },
    {
        Bg_color: "bg-[#48FFCF]",
        Logo: <SiNextdotjs />,
        Heding: "Next.js",
    },
    {
        Bg_color: "bg-[#d2ceff]",
        
        Logo: <FaReact />,
        Heding: "React",
    },
    {
        Bg_color: "bg-[#68a063]",
        Logo: <DiNodejsSmall />,
        Heding: "Express (Node.js)",
    },
    {
        Bg_color: "bg-[#61dafb]",
        Logo: <SiTailwindcss />,
        Heding: "Tailwindcss",
    },
    {
        Bg_color: "bg-[#8FC5EB]",
        Logo: <TbBrandReactNative />,
        Heding: "React Native",
    },
];
