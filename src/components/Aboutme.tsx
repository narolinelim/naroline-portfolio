
import { ScrollContainer, Animator, ScrollPage, batch, Fade, FadeOut, FadeIn, MoveOut, Move, ZoomOut, ZoomIn } from 'react-scroll-motion';
const FadeUp = batch(Fade(), Move());
import profilePicture from "../assets/naroline_pic.jpg";
import TechnicalSkills from "../components/TechnicalSkill";


function AboutMe() {
  return (
    <div id="aboutme-section">
      <ScrollContainer>
          <ScrollPage>
              <div className="flex justify-center items-center h-screen">
                  <Animator animation={FadeUp}>
                      <div>
                          <Animator animation={Fade()}>
                            <div className="flex flex-row space-x-10 justify-items-center">
                              <img src={profilePicture} alt="my profile pic" className="h-120" />
                              <div className="justify-items-center w-200 text-center">
                                <h1>About Me.</h1>
                                <p>I'm Naroline Lim. I'm currently the final year of my undergraduate course at the
                                  <span className="font-bold"> University of Melbourne</span> majoring in <span className="font-bold">Computing and Software Systems</span>.
                                </p>

                                <TechnicalSkills />
                              </div>
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


export default AboutMe;

