import React from 'react'
import ExperienceCard, { ExperienceCardProps } from '../Components/ExperienceCard'

const EXPERIENCE_ITEMS: ExperienceCardProps[] =[
    {
        dates: '2018 — Present',
        job:'Lead Engineer',
        position:'Engineer',
        description:'Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.',
        tags:['javascript','react','javascript','react','javascript','react','javascript','react','javascript','react']
    },
    {
        dates: '2018 — Present',
        job:'Lead Engineer',
        position:'Engineer',
        description:'Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.',
        tags:['javascript','react','javascript','react','javascript','react','javascript','react','javascript','react']
    }
]

const Experience = () => {
  return (
    <section>
        <h2 className="text-white font-poppins text-lg font-semibold text-left mt-16 tracking-tight">Experience</h2>
        <ul>
         {
        EXPERIENCE_ITEMS.map((experience)=>{
          return(
            <li>
              <ExperienceCard
              dates={experience.dates}
              job={experience.job}
              position={experience.position}
              description={experience.description}
              tags={experience.tags}
              />
            </li>
            
          )
        })
      } 
        </ul>
    </section>
  )
}

export default Experience