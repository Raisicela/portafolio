import { useEffect, useState } from "react";

const NavbarWeb = () => {
  const [activeSection, setActiveSection] = useState("about");

  const handleScroll = () => {
    const scrolledY = window.scrollY;
    const aboutSection = document.getElementById("about")!.offsetTop;
    const experienceSection = document.getElementById("experience")!.offsetTop;
    const projectsSection = document.getElementById("projects")!.offsetTop;
    const contactSection = document.getElementById("contact")!.offsetTop;

    if (scrolledY < aboutSection) {
      setActiveSection("main");
    } else if (scrolledY < experienceSection) {
      setActiveSection("about");
    } else if (scrolledY < projectsSection) {
      setActiveSection("projects");
    } else if (scrolledY < contactSection) {
      setActiveSection("projects");
    } else {
      setActiveSection("contact");
    }
  };

  useEffect(() => {
    const scrollElement = document.getElementById("scroll");
    if (scrollElement) {
      scrollElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      // Limpieza al desmontar el componente
      if (scrollElement) {
        scrollElement.removeEventListener("scroll", handleScroll);
      }
    };

    // window.addEventListener("scroll", handleScroll);

    // return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hidden sm:block py-10">
      <ul className="text-left">
        <li className="py-1">
          <a
            className="flex flex-row items-center"
            href="#about"
            onClick={() => {
              setActiveSection("about");
            }}
          >
            <div
              className={
                activeSection === "about"
                  ? "w-[100px] mr-5 h-0 border-cyan-50 border-solid border-[1px]"
                  : "w-[40px] mr-5 h-0 border-[#de7c31] border-solid border-[1px]"
              }
            ></div>
            <span
              className={
                activeSection === "about"
                  ? "text-white font-bold text-lg"
                  : "text-[#de7c31] text-sm"
              }
              id="title-about"
            >
              ABOUT
            </span>
          </a>
        </li>
        <li className="py-1">
          <a
            className="flex flex-row items-center"
            href="#experience"
            onClick={() => {
              setActiveSection("experience");
            }}
          >
            <div
              className={
                activeSection === "experience"
                  ? "w-[100px] mr-5 h-0 border-cyan-50 border-solid border-[1px]"
                  : "w-[40px] mr-5 h-0 border-[#de7c31] border-solid border-[1px]"
              }
            ></div>
            <span
              className={
                activeSection === "experience"
                  ? "text-white font-bold text-lg"
                  : "text-[#de7c31] text-sm"
              }
            >
              EXPERIENCE
            </span>
          </a>
        </li>
        <li className="py-1">
          <a
            className="flex flex-row items-center"
            href="#projects"
            onClick={() => {
              setActiveSection("projects");
            }}
          >
            <div
              className={
                activeSection === "projects"
                  ? "w-[100px] mr-5 h-0 border-cyan-50 border-solid border-[1px]"
                  : "w-[40px] mr-5 h-0 border-[#de7c31] border-solid border-[1px]"
              }
            ></div>
            <span
              className={
                activeSection === "projects"
                  ? "text-white font-bold text-lg"
                  : "text-[#de7c31] text-sm"
              }
            >
              PROJECTS
            </span>
          </a>
        </li>
        <li className="py-1">
          <a
            className="flex flex-row items-center"
            href="#contact"
            onClick={() => {
              setActiveSection("contact");
            }}
          >
            <div
              className={
                activeSection === "contact"
                  ? "w-[100px] mr-5 h-0 border-cyan-50 border-solid border-[1px]"
                  : "w-[40px] mr-5 h-0 border-[#de7c31] border-solid border-[1px]"
              }
            ></div>
            <span
              className={
                activeSection === "contact"
                  ? "text-white font-bold text-xl"
                  : "text-[#de7c31] text-sm"
              }
            >
              CONTACT
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavbarWeb;
