import ProjectCard, { ProjectCardProps } from "../Components/ProjectCard"
import ASSETS from "../assets"

const PROJECT_ITEMS: ProjectCardProps[] =[
    {
        projects:'Build a Spotify Connected',
        description:'Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.',
        // tags:['javascript','react','javascript','react','javascript','react','javascript','react','javascript','react'],
        image: ASSETS.SPOTIFY
    },
    {
        projects: 'Spotify',
        description:'Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
        tags:['javascript','react','javascript','react','javascript','react','javascript','react','javascript','react'],
        image: ASSETS.SPOTIFY2
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