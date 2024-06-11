import { DiDocker, DiLinux } from "react-icons/di";
import { BsWordpress } from "react-icons/bs";
import { FaAws, FaJenkins, FaFigma, FaGithub } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";

export const Technologies = [
    {
        Bg_color: "bg-[#0db7ed]",
        Logo: <DiDocker />,
        Heding: "Docker",
    },
    {
        Bg_color: "bg-[#FF7F07]",
        Logo: <DiLinux />,
        Heding: "Linux",
    },
    {
        Bg_color: "bg-[#326CE5]",
        Logo: <SiKubernetes />,
        Heding: "Kubernetes",
    },
    {
        Bg_color: "bg-[#F7941D]",
        Logo: <FaAws />,
        Heding: "AWS",
    },
    {
        Bg_color: "bg-[#D24939]",
        Logo: <FaJenkins />,
        Heding: "Jenkins",
    },
    {
        Bg_color: "bg-[#F24E1E]",
        Logo: <FaFigma />,
        Heding: "Figma",
    },
    {
        Bg_color: "bg-[#EDD400]",
        Logo: <FaGitAlt />,
        Heding: "Git",
    },
    {
        Bg_color: "bg-[#47C0D0]",
        Logo: <BsWordpress />,
        Heding: "WordPress",
    },
];
