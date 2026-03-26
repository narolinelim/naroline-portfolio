import { ScrollContainer, Animator, ScrollPage, batch, Fade, FadeOut, FadeIn, MoveOut, Move } from 'react-scroll-motion';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ProjectCard from './ProjectCards';
import senseBridgeIcon from '../assets/sensebridge-circle-logo.svg';
import portfolioIcon from '../assets/portfolio-icon.png'


const FadeUp = batch(Fade(), Move());

function Projects() {
  return (     
    <div id="project-section">
      <ScrollContainer>
        <ScrollPage>
          <div className="flex justify-center items-center h-screen">
            <Animator animation={FadeUp}>
              <div className="flex flex-col items-center justify-items-center w-500 gap-10">
                <h1>Projects</h1>
                <Animator animation={Fade()}>
                  <div className="flex flex-row flex-wrap gap-3 justify-center">
                    <ProjectCard 
                      name="SenseBridge" 
                      icon={senseBridgeIcon} 
                      description="a mobile app that translates potential physical obstacles, item detection and Australian sign language into text and speech with real-time camera for people with disabilities."
                    />
                    <ProjectCard 
                      name="Personal Portfolio" 
                      icon={portfolioIcon} 
                      description="My personal website (this one :)))."
                    />
                  </div>
                </Animator>
              </div>
            </Animator>
          </div>
        </ScrollPage>

      </ScrollContainer>
    </div>
  
  );
}



export default Projects;