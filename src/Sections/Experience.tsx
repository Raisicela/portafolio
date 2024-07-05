import ExperienceCard, {
  ExperienceCardProps,
} from "../Components/ExperienceCard";
import ASSETS from "../assets";

const EXPERIENCE_ITEMS: ExperienceCardProps[] = [
  {
    dates: "March. 2023 – Current Date",
    job: "Cistec",
    position: "Software Developer",
    image: ASSETS.CISTEC,
    isVideo: true,
    description: "Frontend development using NextJs framework and Tailwind CSS",
    tags: ["React.js", "Javascript", "Typescript", "Tailwind CSS"],
    url: "https://cistececuador.com/",
  },
  {
    dates: "Mar. 2023 - Sept. 2023",
    job: "Alfabelectric",
    position: "Frontend Developer",
    image: ASSETS.ALFAELECTRIC,
    isVideo: true,
    description:
      "Implementation of the single page application for Alfabelectric using React, redux, typescript and tailwind css",
    tags: [
      "React.js",
      "Javascript",
      "Typescript",
      "Tailwind CSS",
      "Siteground",
    ],
    url: "https://alfabelectric.com/",
  },
  {
    dates: "Jun. 2021 - Nov. 2022",
    job: "Tovo",
    position: "Frontend Developer",
    image: ASSETS.TOVO,
    isVideo: true,
    description:
      "Create frontend, SPA using React and deploy to Firebase hosting",
    tags: ["React.js", "Javascript", "Bootstrap", "Firebase"],
    url: "https://tovoappweb.web.app/",
  },
  {
    dates: "Jan. 2021 - Agost 2021",
    job: "Inselmed",
    position: "Frontend Developer",
    image: ASSETS.INSELMED,
    isVideo: false,
    description:
      "Development of the SPA of the prototype of the inventory control system for the HCAM hospital. The project includes the control of users and roles, personnel management, maintenance control of hospital equipment, equipment resumes and generation of reports.",
    tags: ["React.js", "Javascript", "Bootstrap", "Firebase"],
    url: "https://inventario-inselmed.web.app/signin",
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <h2 className="text-white font-poppins uppercase text-2xl font-semibold text-left mt-16 tracking-tight">
        Experience
      </h2>
      <ul>
        {EXPERIENCE_ITEMS.map((experience, i) => {
          return (
            <li key={i}>
              <ExperienceCard
                dates={experience.dates}
                job={experience.job}
                position={experience.position}
                image={experience.image}
                isVideo={experience.isVideo}
                description={experience.description}
                tags={experience.tags}
                url={experience.url}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Experience;
