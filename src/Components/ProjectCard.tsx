import Tag from "./Tag";

export type ProjectCardProps = {
  projects: string;
  description: string;
  tags?: string[];
  image: string;
  url: string
};

export const ProjectCard = (props:ProjectCardProps) => {
  return (
    <article className="flex flex-col text-left mt-8">
      <a href={props.url} target='_blank' rel="noreferrer" className="flex gap-2">
        <span className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base">{props.projects}</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="text-white h-4" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg>
      </a>
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
