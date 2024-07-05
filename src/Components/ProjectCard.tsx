import Tag from "./Tag";
import React, { useRef } from "react";

export type ProjectCardProps = {
  projects: string;
  description: string;
  tags?: string[];
  image: string;
  isVideo: boolean;
  url: string;
};

export const ProjectCard = (props: ProjectCardProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseOver = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseOut = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };
  return (
    <article className="flex flex-col text-left mt-8 rounded-3xl pb-5 bg-[#1E293B]">
      <header className=" mb-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
        {props.isVideo && (
          <video
            ref={videoRef}
            poster={props.image}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            src={props.image}
            autoPlay
            muted
          ></video>
        )}
        {!props.isVideo && (
          <picture>
            <img
              src={props.image}
              alt={props.description}
              className="rounded-t-3xl"
            />
          </picture>
        )}
      </header>
      <div className="px-4 ">
        <a
          href={props.url}
          target="_blank"
          rel="noreferrer"
          className="flex gap-2"
        >
          <span className="inline-flex items-baseline font-bold text-3xl leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link">
            {props.projects}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 15 15"
            fill="currentColor"
            className="text-white h-4"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
        <p className="text-slate-400 mt-2 text-lg leading-normal">
          {props.description}
        </p>
        <ul className="flex flex-wrap gap-2 mt-5">
          {props.tags &&
            props.tags.map((tag, i) => {
              return (
                <li key={i}>
                  <Tag tag={tag} />
                </li>
              );
            })}
        </ul>
      </div>
    </article>
  );
};

export default ProjectCard;
