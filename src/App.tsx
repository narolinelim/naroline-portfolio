import './App.css'
import Main from './components/Main';
import AboutMe from './components/Aboutme';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Projects from './components/Projects';
import ResumePDF from './assets/Naroline_LIM_Resume_02:03:2026.pdf';
import linkedinIcon from './assets/linkedin.png';
import githubIcon from './assets/github.png';
import devpostIcon from './assets/devpost.png';


function App() {

  return (
    <div>

      <aside className="fixed flex flex-col h-screen justify-center z-50">
        <div className="flex flex-col left-0 w-20 m-8 items-center gap-8 border-2 border-none rounded-4xl bg-gray-80 backdrop-blur-xl shadow-lg">
          <a href="https://www.linkedin.com/in/narolinelim" target="_blank">
            <img src={linkedinIcon} className="h-10 w-10 mx-auto mt-5"/>
          </a>
          <a href="https://github.com/narolinelim" target="_blank">
            <img src={githubIcon} className="h-10 w-10 mx-auto"/>
          </a>
          <a href="https://devpost.com/narolinelimswe?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" target="_blank">
            <img src={devpostIcon} className="h-10 w-10 mx-auto mb-5"/>
          </a>
        </div>
      </aside>

      <nav className="flex justify-between px-10 py-4 z-50 sticky top-0 bg-transparent items-center">
        <a href="#main-section" className="text-2xl font-bold">Naroline Lim 🤔</a>
        <div className="flex flex-row space-x-10 items-center">
          <div className="border-2 border-none bg-black rounded-4xl py-3 px-5 text-white justify-center items-center">
            <a href={ResumePDF} download="Naroline Lim's Resume">Download Resume</a>
          </div>
          <div className="flex space-x-10 border-2 border-none rounded-4xl py-5 px-10 bg-gray-80 backdrop-blur-xl shadow-lg">
            <a href="#aboutme-section">About Me</a>
            <a href="#resume-section">Experience</a>
            <a href="#project-section">Projects</a>
            <a href="#contact-section">Contact</a>
          </div>
        </div>
      </nav>


      <Main />
      <AboutMe />
      <Resume />
      <Projects />
      <Contact />


    </div>

  

  );
};

export default App
