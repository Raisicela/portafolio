type PresentationProps = {
  image: string;
  title: string;
  subtitle: string;
  description: string;
};

const Presentation = (props: PresentationProps) => {
  return (
    <div>
      {/* <img className="h-60 rounded-full mb-2" src={props.image} alt="logo" /> */}
      <h1 className="text-white font-poppins text-xl sm:text-5xl font-bold text-left tracking-tight">
        {props.title}
      </h1>
      <h2 className=" font-poppins text-3xl text-[#de7c31] font-semibold text-left mt-3 tracking-tight">
        {props.subtitle}
      </h2>
      <p className="text-slate-400 font-poppins text-md text-left mt-4">
        {props.description}
      </p>
    </div>
  );
};

export default Presentation;
