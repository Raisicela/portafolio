import React from "react";
import Presentation from "../Components/Presentation";
import Media from "../Components/Media";
import { MediaItem } from "../Components/Media";
import ASSETS from "../assets";
import NavbarWeb from "../Components/NavbarWeb";
import Footer from "./Footer";
import { Avatar } from "../Components/Avatar";

const MEDIA_ITEMS: MediaItem[] = [
  {
    url: "https://github.com/Raisicela",
    alt: "Github",
    image: ASSETS.GITHUB,
  },
  {
    url: "https://www.linkedin.com/in/raisa-marilyn-guayasamín-pico",
    alt: "Linkedin",
    image: ASSETS.LINKEDIN,
  },
  {
    url: "mailto:raisa.marilyn1993@gmail.com",
    alt: "Mail",
    image: ASSETS.GMAIL,
  },
];

const Main = () => {
  return (
    <section id="main">
      <div className="flex justify-center">
        {/* <h1 className="text-white">avatar</h1> */}
        <Avatar />
      </div>
      <Presentation
        image={ASSETS.LOGO}
        title="Hey, I'm Raisa Guayasamin"
        subtitle="FrontEnd Developer"
        description="Hi, I'm a frontend developer who loves creating beautiful and user-friendly web interfaces with HTML, CSS, React, Tailwind and JavaScript."
      />
      <NavbarWeb />
      <Media items={MEDIA_ITEMS} />

      <div className="max-h-2">
        <Footer />
      </div>
    </section>
  );
};

export default Main;
