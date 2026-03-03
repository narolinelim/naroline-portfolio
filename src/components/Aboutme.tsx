import { ScrollContainer, Animator, ScrollPage, batch, Fade, FadeOut, FadeIn, MoveOut, Move, ZoomOut, ZoomIn } from 'react-scroll-motion';
import patoDuck from "../assets/pato-duck.gif";


const FadeUp = batch(FadeIn(), ZoomOut());

function AboutMe() {
    return (
        <div id="aboutme-section" className="-mt-16">
            <ScrollContainer>
                <ScrollPage>
                    <div className="flex justify-center items-center h-screen">
                        <Animator animation={FadeUp}>
                            <div className="flex flex-row items-center space-x-20">
                                <Animator animation={batch(Fade(), MoveOut(-1000, 0))}>
                                    <h1>Naroline Lim</h1>
                                    <p>In Pursuit Of Greatness.</p>
                                </Animator>
                                
                                <Animator animation={MoveOut(1000, 0)}>
                                    <img src={patoDuck} alt="description" />
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