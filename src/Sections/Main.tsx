import React from 'react'
import Presentation from '../Components/Presentation'
import Media from '../Components/Media'
import { MediaItem } from '../Components/Media'
import ASSETS from '../assets'
import NavbarWeb from '../Components/NavbarWeb'

const MEDIA_ITEMS: MediaItem[] =[
  {
    url: "https://github.com/Raisicela",
    alt: "Github",
    image: ASSETS.GITHUB
  },
  {
    url: "https://www.linkedin.com/in/raisa-marilyn-guayasamín-pico",
    alt: "Linkedin",
    image: ASSETS.LINKEDIN
  },
  {
    url: "mailto:raisa.marilyn1993@gmail.com",
    alt: "Mail",
    image: ASSETS.GMAIL
  }
]

const Main = () => {
  return (
    <section id='main'>
        <Presentation
        image={ASSETS.LOGO}
        title='Raisa Guayasamin'
        subtitle='FrontEnd Developer'
        description="Hi, I'm a frontend developer who loves creating beautiful and user-friendly web interfaces with HTML, CSS, React, Tailwind and JavaScript."
        />
        <NavbarWeb/>
        <Media
        items={MEDIA_ITEMS}
        />
    </section>
  )
}

export default Main