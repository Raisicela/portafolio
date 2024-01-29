import { useEffect, useState } from 'react'

const NavbarWeb = () => {
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
        <div className='py-16'>
       
        <ul className='text-left'>
          <li className='py-3'>
            <a className='flex flex-row items-center' href="#about" onClick={()=>{
              setActiveSection('about')
            }}>
              <div className={activeSection === 'about' ? 'w-[100px] mr-5 h-0 border-cyan-50 border-solid border-[1px]': 'w-[40px] mr-5 h-0 border-slate-300 border-solid border-[1px]'}></div>
              <span className={activeSection === 'about' ? 'text-white font-bold' : 'text-slate-300'}>
                ABOUT
              </span>
            </a>
          </li>
          <li className='py-3'>
            <a className='flex flex-row items-center' href="#experience" onClick={()=>{
              setActiveSection('experience')
            }}>
               <div className={activeSection === 'experience' ? 'w-[100px] mr-5 h-0 border-cyan-50 border-solid border-[1px]': 'w-[40px] mr-5 h-0 border-slate-300 border-solid border-[1px]'}></div>
              <span className={activeSection === 'experience' ? 'text-white font-bold' : 'text-slate-300'}>
                EXPERIENCE
              </span>
            </a>
          </li>
          <li className='py-3'>
            <a className='flex flex-row items-center' href="#projects" onClick={()=>{
              setActiveSection('projects')
            }}>
               <div className={activeSection === 'projects' ? 'w-[100px] mr-5 h-0 border-cyan-50 border-solid border-[1px]': 'w-[40px] mr-5 h-0 border-slate-300 border-solid border-[1px]'}></div>
              <span className={activeSection === 'projects' ? 'text-white font-bold' : 'text-slate-300'}>
                PROJECTS
              </span>
            </a>
          </li>
        </ul>
      </div>
        
    );
  };

export default NavbarWeb