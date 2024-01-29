import Tag from "./Tag";

export type ExperienceCardProps = {
  dates: string;
  job: string;
  position: string;
  description: string;
  tags: string[];
  url: string
};

const ExperienceCard = (props:ExperienceCardProps) => {
  return (
    <article className="flex flex-col text-left mt-8 border-slate-400 border-[1px] rounded-3xl p-5">
      <header className=" mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 ">{props.dates}</header>
      <a href={props.url} target='_blank' rel="noreferrer" className="flex gap-2">
        <span className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base">{props.job}</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="text-white h-4" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg>
      </a>
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