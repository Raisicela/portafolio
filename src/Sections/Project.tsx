import ProjectCard, { ProjectCardProps } from "../Components/ProjectCard";
import ASSETS from "../assets";

const PROJECT_ITEMS: ProjectCardProps[] = [
  {
    projects: "Thumps Up",
    description:
      "E-commerce app with authentication for users and administrators. Management of categories, products and shopping cart.",
    tags: ["Angular", "TypeScript", "HTML", "CSS"],
    image: ASSETS.THUMBSUP,
    isVideo: true,
    url: "https://nimble-syrniki-5bb972.netlify.app/#/auth/login",
  },
  {
    projects: "Full Waste",
    description:
      "Web application linked to an electronic device anchored to a garbage can for a solid waste remote management project.",
    tags: ["Javascript", "HTML", "CSS"],
    image: ASSETS.FULLWASTE,
    isVideo: false,
    url: "https://firebasestorage.googleapis.com/v0/b/raisa-guayasamin.appspot.com/o/pitch_v1.mp4?alt=media&token=52ae786b-7a0d-434e-add3-5705544ccea2",
  },
];

const Project = () => {
  return (
    <section id="projects">
      <h2 className="text-white font-poppins uppercase text-2xl font-semibold text-left mt-16 tracking-tight">
        Projects
      </h2>
      <ul>
        {PROJECT_ITEMS.map((project, i) => {
          return (
            <li key={i}>
              <ProjectCard
                projects={project.projects}
                description={project.description}
                tags={project.tags}
                image={project.image}
                isVideo={project.isVideo}
                url={project.url}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Project;
