import { ScrollContainer, Animator, ScrollPage, batch, Fade, FadeOut, FadeIn, MoveOut, Move } from 'react-scroll-motion';

const FadeUp = batch(Fade(), Move());

function Projects() {
    return (
        
        <div id="project-section">
            <ScrollContainer>
                <ScrollPage>
                    <div className="flex justify-center items-center h-screen">
                        <Animator animation={FadeUp}>
                            <div>
                                <Animator animation={Fade()}>
                                    <h1>Projects.</h1>
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