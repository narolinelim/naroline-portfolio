
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
                              <div className="flex flex-col items-center text-center justify-center gap-10">
                                <div className="max-w-4xl mb-5">
                                  <h1 className="mb-5">About Me...</h1>
                                  <p>Hi, I'm Naroline Lim! I'm currently in the final year of my undergraduate course at the
                                    <span className="font-bold"> University of Melbourne</span> majoring in <span className="font-bold">Computing and Software Systems</span>.
                                    My interest lies in the intersection of technology and healthcare. I am passionate about sharing my contributions in projects that
                                    provide impactful solutions to communities that are underprivileged.
                                  </p>
                                </div>
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

