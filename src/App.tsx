import './App.css'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link, Routes, Route } from 'react-router-dom';
import Aboutme from './components/Aboutme';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Projects from './components/Projects';


function App() {

  return (
    <div>

      <Sidebar>
        <Menu>
          <MenuItem component={<Link to="/" />}>About Me</MenuItem>
          <MenuItem component={<Link to="/projects" />}>Projects</MenuItem>
          <MenuItem component={<Link to="/resume" />}>Resume</MenuItem>
          <MenuItem component={<Link to="/contact" />}>Contact</MenuItem>
        </Menu>
      </Sidebar>

      <div>
        <Routes>
          <Route path="/" element={<Aboutme />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
