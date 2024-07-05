import "./App.css";
import About from "./Sections/About";
import Experience from "./Sections/Experience";
import Main from "./Sections/Main";
import Project from "./Sections/Project";
import Navbar from "./Components/Navbar";
import Contact from "./Sections/Contact";

function App() {
  return (
    <div className="flex flex-col sm:h-full md:h-screen">
      <div className="App px-6 py-12 sm:py-0 sm:px-0 sm:flex sm:flex-row mx-auto  ">
        <div className="sm:relative sm:top-0 sm:w-1/2 sm:px-16 sm:max-h-screen sm:py-16">
          <Navbar />
          <Main />
        </div>
        <div
          id="scroll"
          className=" sm:flex sm:flex-col sm:w-1/2 sm:px-16 sm:pb-10 sm:max-h-screen sm:overflow-y-scroll"
        >
          <About />
          <Experience />
          <Project />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
