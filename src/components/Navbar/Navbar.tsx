import React, { useState, useEffect } from "react";
import logo from "@/assets/Image/logo.png";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import Image from "next/image";
import { NavbarData } from "./NavbarData";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = NavbarData.map((e) => document.getElementById(e.link));
      let currentSection = "";

      sections.forEach((section) => {
        if (
          section &&
          section.getBoundingClientRect().top <= window.innerHeight / 2
        ) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <React.Fragment>
      {/*----- Start Navbar -----*/}
      <header>
        <nav className="fixed top-0 w-full z-50 bg-white">
          <div className="container lg:py-3 py-5">
            <div className="flex items-center justify-between md:block">
              <div className="flex justify-between items-center w-full">
                {/* Logo */}
                <div className="z-50 relative">
                  <a href="#home">
                    <Image src={logo} alt="" />
                  </a>
                </div>
                {/* Button close and menu */}
                <div className="flex items-center gap-5 lg:hidden">
                  <button
                    onClick={() => setOpen(!open)}
                    className="block lg:hidden text-[32px] outline-none"
                  >
                    {open ? <RiCloseFill /> : <RiMenu3Fill />}
                  </button>
                </div>
                {/* Desktop screen */}
                <div className="hidden lg:block">
                  <ul className="list-none flex space-x-5 items-center">
                    {NavbarData.map((e, key) => (
                      <li key={key}>
                        <a
                          href={"#" + e.link}
                          className={`inline-block px-1.5 text-base font-medium uppercase leading-9 tracking-[2px] hover:text-orange-600 ${
                            activeSection === e.link ? "active" : ""
                          }`}
                        >
                          {e.name}
                        </a>
                      </li>
                    ))}
                    <a href="#Contact" className="btn btn-theme">
                      Contact Now
                    </a>
                  </ul>
                </div>
              </div>
            </div>
            {/* Mobile screen */}
            <div className={`lg:hidden ${open ? "" : "hidden"}`}>
              <div className="pt-5">
                <ul>
                  {NavbarData.map((e, key) => (
                    <li key={key}>
                      <a
                        href={"#" + e.link}
                        className={`inline-block px-1.5 text-base font-medium uppercase leading-9 tracking-[2px] hover:text-orange-600 ${
                          activeSection === e.link ? "active" : ""
                        }`}
                      >
                        {e.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/*----- End Navbar -----*/}
    </React.Fragment>
  );
};

export default Navbar;
