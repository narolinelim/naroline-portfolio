
import { ScrollContainer, Animator, ScrollPage, batch, Fade, FadeOut, FadeIn, MoveOut, Move, ZoomOut, ZoomIn } from 'react-scroll-motion';
import patoDuck from "../assets/pato-duck.gif";
import noControl from "../../public/no_control.mp3";
import AudioPlayer from './AudioPlayer';

const FadeUp = batch(FadeIn(), ZoomOut());

const track = {src: "noControl"};


function AboutMe() {
    return (
        <div id="aboutme-section" className="scroll-mt-24 h-screen">
            <ScrollContainer>
                <ScrollPage>
                    <div className="flex justify-center items-center h-screen -mt-24">
                        <Animator animation={FadeUp}>
                            <div className="flex flex-row items-center space-x-20">
                                <Animator animation={batch(Fade(), MoveOut(-1000, 0))}>
                                    <h1 className="text-2xl">Naroline Lim</h1>
                                    <p>In Pursuit Of Greatness.</p>
                                </Animator>
                                
                                <Animator animation={MoveOut(1000, 0)}>
                                    <div className="flex-col space-y-10 justify-items-center">
                                        <img src={patoDuck} alt="duck dancing" />
                                        <AudioPlayer />
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