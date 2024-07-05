export type MediaItem = {
  url: string;
  alt: string;
  image: string;
};

type MediaProps = {
  items: MediaItem[];
};

const Media = (props: MediaProps) => {
  return (
    <div>
      <ul className="flex gap-10 mt-8  sm:bottom-24">
        {props.items.map((prop, i) => {
          return (
            <li key={i}>
              <a href={prop.url} target="_blank" rel="noreferrer">
                <img className="h-7" src={prop.image} alt={prop.alt} />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Media;
