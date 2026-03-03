import { ScrollContainer, Animator, ScrollPage, batch, Fade, FadeOut, FadeIn, MoveOut, Move, ZoomOut, ZoomIn } from 'react-scroll-motion';


const FadeUp = batch(FadeIn(), ZoomOut());

function AboutMe() {
    return (
        <div id="aboutme-section" className="-mt-16">
            <ScrollContainer>
                <ScrollPage>
                    <div className="flex justify-center items-center h-screen">
                        <Animator animation={FadeUp}>
                            <div>
                                <Animator animation={Fade()}>
                                    <h1>Naroline Lim</h1>
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