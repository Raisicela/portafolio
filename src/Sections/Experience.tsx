import ExperienceCard, { ExperienceCardProps } from '../Components/ExperienceCard'

const EXPERIENCE_ITEMS: ExperienceCardProps[] =[
    {
      dates: 'September. 2023 – Current Date',
      job:'Freelancer',
      position:'Software Developer',
      description:'Frontend development using NextJs framework and Tailwind CSS',
      tags:['React.js','Javascript','Typescript','Tailwind CSS'],
      url:''
    },
    {
      dates: 'March 2023 - September. 2023',
      job:'Alfabelectric',
      position:'Frontend Developer',
      description:'Implementation of the single page application for Alfabelectric using React, redux, typescript and tailwind css',
      tags:['React.js','Javascript','Typescript','Tailwind CSS', 'Siteground'],
      url:'https://alfabelectric.com/'
    },
    {
      dates: 'Jun. 2021 - Nov. 2022',
      job:'Tovo',
      position:'Frontend Developer',
      description:'Create frontend, SPA using React and deploy to Firebase hosting',
      tags:['React.js','Javascript','Bootstrap','Firebase'],
      url:'https://tovoappweb.web.app/'
    },
    {
      dates: 'Agost 2019 - May 2021',
      job:'Inselmed',
      position:'Frontend Developer',
      description:'Development of the SPA of the prototype of the inventory control system for the HCAM hospital. The project includes the control of users and roles, personnel management, maintenance control of hospital equipment, equipment resumes and generation of reports.',
      tags:['React.js','Javascript','Bootstrap','Firebase'],
      url:'https://inventario-inselmed.web.app/signin'
    }
]

const Experience = () => {
  return (
    <section id='experience'>
        <h2 className="text-white font-poppins uppercase text-lg font-semibold text-left mt-16 tracking-tight">Experience</h2>
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
              url={experience.url}
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