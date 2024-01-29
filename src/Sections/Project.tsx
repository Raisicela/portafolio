import ProjectCard, { ProjectCardProps } from "../Components/ProjectCard"
import ASSETS from "../assets"

const PROJECT_ITEMS: ProjectCardProps[] =[
    {
        projects:'Full Waste',
        description:'Development of the web page for the project. Development of the software for the full waste device. Develop of the remote monitoring system. Electronic systems design',
        tags:['Javascript','HTML','CSS'],
        image: ASSETS.FULLWASTE,
        url: 'https://firebasestorage.googleapis.com/v0/b/raisa-guayasamin.appspot.com/o/pitch_v1.mp4?alt=media&token=52ae786b-7a0d-434e-add3-5705544ccea2'
    }
]


const Project = () => {
  return (
    <section id="projects">
        <h2 className="text-white font-poppins uppercase text-lg font-semibold text-left mt-16 tracking-tight">Projects</h2>
        <ul>
         {
        PROJECT_ITEMS.map((project)=>{
          return(
            <li>
              <ProjectCard
              projects={project.projects}
              description={project.description}
              tags={project.tags}
              image={project.image}
              url={project.url}
              />
            </li>
            
          )
        })
      } 
        </ul>
    </section>
  )
}

export default Project