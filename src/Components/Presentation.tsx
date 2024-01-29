type PresentationProps = {
  title: string;
  subtitle: string;
  description: string;
};

const Presentation = (props: PresentationProps) => {
  return (
    <div>
      <h1 className="text-white font-poppins text-3xl sm:text-4xl font-bold text-left tracking-tight">{props.title}</h1>
      <h2 className="text-white font-poppins text-lg font-semibold text-left mt-3 tracking-tight">{props.subtitle}</h2>
      <p className="text-slate-400 font-poppins text-sm text-left mt-4">
        {props.description}
      </p>
    </div>
    
  );
};

export default Presentation;
