type TagProps = {
  tag: string;
};

const Tag = (props: TagProps) => {
  return (
    <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-sm font-medium leading-5 text-teal-300 hover:opacity-75 ">
      {props.tag}
    </span>
  );
};

export default Tag;
