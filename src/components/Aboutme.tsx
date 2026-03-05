
import { ScrollContainer, Animator, ScrollPage, batch, Fade, FadeOut, FadeIn, MoveOut, Move, ZoomOut, ZoomIn } from 'react-scroll-motion';
const FadeUp = batch(Fade(), Move());


function AboutMe() {
  return (
    <div id="aboutme-section">
      <ScrollContainer>
          <ScrollPage>
              <div className="flex justify-center items-center h-screen">
                  <Animator animation={FadeUp}>
                      <div>
                          <Animator animation={Fade()}>
                            <h1>About Me.</h1>
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