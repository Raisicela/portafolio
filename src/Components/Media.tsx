import React from 'react'
import ASSETS from '../assets'
import { type } from 'os';

export type MediaItem = {
    url: string;
    alt: string;
    image: string;
  };

type MediaProps = {
    items: MediaItem[]
}

const Media = (props: MediaProps) => {
  return (
    <div>
        <ul className='flex gap-10 mt-8'>
            {props.items.map((prop)=>{
                return(
                    <li>
                <a href={prop.url} target='_blank'>
                    <img className="h-7" src={prop.image} alt={prop.alt}/>
                </a>
            </li>
                )
            })}
            
        </ul>
    </div>
  )
}

export default Media;