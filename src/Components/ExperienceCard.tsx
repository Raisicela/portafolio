import Tag from "./Tag";

export type ExperienceCardProps = {
  dates: string;
  job: string;
  position: string;
  description: string;
  tags: string[]
};

const ExperienceCard = (props:ExperienceCardProps) => {
  return (
    <article className="flex flex-col text-left mt-8">
      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 ">{props.dates}</header>
      <span className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base">{props.job}</span>
      <h3 className="text-slate-500">{props.position}</h3>
      <p className="text-slate-400 mt-2 text-sm leading-normal">{props.description}</p>
      <ul className="flex flex-wrap gap-2 mt-5">
      {
        props.tags.map((tag)=>{
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
      
    </article>
  )
}

export default ExperienceCard