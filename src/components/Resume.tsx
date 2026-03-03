import { ScrollContainer, Animator, ScrollPage, batch, Fade, FadeOut, FadeIn, MoveOut, Move } from 'react-scroll-motion';


const FadeUp = batch(Fade(), Move());

function Resume() {
    return (
        <div id="resume-section">
            <ScrollContainer>
                <ScrollPage>
                    <div className="flex justify-center items-center h-screen">
                        <Animator animation={FadeUp}>
                            <div>
                                <Animator animation={Fade()}>
                                    <h1>Resume.</h1>
                                </Animator>
                            </div>
                        </Animator>
                    </div>
                </ScrollPage>

            </ScrollContainer>
        </div>
    
    );
}


export default Resume;