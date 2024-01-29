import './App.css';
import About from './Sections/About';
import Experience from './Sections/Experience';
import Main from './Sections/Main';
import Project from './Sections/Project';
import Footer from './Sections/Footer';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App px-6 py-12 sm:py-0 sm:px-0 sm:flex sm:flex-row mx-auto min-h-screen max-w-screen-xl">
      <div className='sm:relative sm:top-0 sm:w-1/2 sm:px-16 sm:max-h-screen sm:py-16'>
        <Navbar/>
        <Main/>
      </div>
      <div className='sm:flex sm:flex-col sm:w-1/2 sm:px-16 sm:pb-10 sm:max-h-screen sm:overflow-y-scroll'>
        <About/>
        <Experience/>
        <Project/>
        <Footer/>
      </div>

    </div>
  );
}

export default App;
