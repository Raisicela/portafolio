import { useEffect, useState } from 'react'

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('about');
  
    useEffect(() => {
      const handleScroll = () => {
        const scrolledY = window.scrollY;
        const aboutSection = document.getElementById('about')!.offsetTop;
        const experienceSection = document.getElementById('experience')!.offsetTop;
        const projectsSection = document.getElementById('projects')!.offsetTop;
  
        if (scrolledY < aboutSection) {
            setActiveSection('main');
          } 
        else if (scrolledY < experienceSection) {
          setActiveSection('about');
        } else if (scrolledY < projectsSection) {
          setActiveSection('experience');
        } else {
          setActiveSection('projects');
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
        <div className='sm:hidden'>
        {activeSection!=='main' && 
        <nav className='bg-[#172754] flex w-[100%] fixed top-0 font-poppins text-lg font-bold uppercase py-5 text-slate-200 lg:sr-only tracking-tight '>
        <h1 >
        {activeSection}
        </h1>
      </nav>}
        </div>
        
    );
  };

export default Navbar