import './App.css'
import Aboutme from './components/Aboutme';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Projects from './components/Projects';


function App() {

  return (
    <div>
      <nav className="flex justify-between px-10 py-4 z-50 sticky top-0 bg-transparent items-center">
        <a href="#aboutme-section" className="text-3xl font-bold">Naroline Lim 😏</a>
        <div className="flex space-x-10 border border-black rounded-md p-5">
          <a href="#aboutme-section">About Me</a>
          <a href="#project-section">Projects</a>
          <a href="#resume-section">Resume</a>
          <a href="#contact-section">Contact</a>
        </div>
      </nav>

      <Aboutme />
      <Projects />
      <Resume />
      <Contact />


    </div>

  

  );
};

export default App
