import Tag from "./Tag";

export type ProjectCardProps = {
  projects: string;
  description: string;
  tags?: string[];
  image: string
};

export const ProjectCard = (props:ProjectCardProps) => {
  return (
    <article className="flex flex-col text-left mt-8">
      <span className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base">{props.projects}</span>
      <p className="text-slate-400 mt-2 text-sm leading-normal">{props.description}</p>
      <ul className="flex flex-wrap gap-2 mt-5">
      {
        props.tags && props.tags.map((tag)=>{
          return(
            <li>
              <Tag
                tag={tag}
              />
            </li>
            
          )
        })
      }
      </ul>
      <img className='mt-6 w-52' src={props.image} alt="" />
      
    </article>
  )
}

export default ProjectCard
