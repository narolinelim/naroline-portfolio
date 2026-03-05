import './App.css'
import Main from './components/Main';
import AboutMe from './components/Aboutme';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Projects from './components/Projects';


function App() {

  return (
    <div>
      <nav className="flex justify-between px-10 py-4 z-50 sticky top-0 bg-transparent items-center">
        <a href="#main-section" className="text-2xl font-bold">Naroline Lim 😊</a>
        <div className="flex space-x-10 border-2 border-none rounded-4xl py-5 px-10 bg-gray-80 backdrop-blur-xl shadow-lg">
          <a href="#aboutme-section">About Me</a>
          <a href="#project-section">Projects</a>
          <a href="#resume-section">Resume</a>
          <a href="#contact-section">Contact</a>
        </div>
      </nav>

      <Main />
      <AboutMe />
      <Projects />
      <Resume />
      <Contact />


    </div>

  

  );
};

export default App
