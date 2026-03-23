import { ScrollContainer, Animator, ScrollPage, batch, Fade, FadeOut, FadeIn, MoveOut, Move } from 'react-scroll-motion';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const FadeUp = batch(Fade(), Move());

function Resume() {
    return (
        <div id="resume-section">
            <ScrollContainer>
                <ScrollPage>
                    <div className="flex justify-center items-center h-screen">
                        <Animator animation={FadeUp}>
                            <div className="w-200">
                              <Animator animation={Fade()}>
                                  <VerticalTimeline>
                                    <VerticalTimelineElement
                                      className="vertical-timeline-element--work"
                                      contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                      date="November 2025 - March 2026"
                                    >
                                      <h3 className="vertical-timeline-element-title">To be continued...</h3>
                                      <h4 className="vertical-timeline-element-subtitle">Earth</h4>
                                    </VerticalTimelineElement>
                                    <VerticalTimelineElement
                                      className="vertical-timeline-element--work"
                                      contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                      date="November 2025 - March 2026"
                                    >
                                      <h3 className="vertical-timeline-element-title">Research Software Engineering Intern</h3>
                                      <h4 className="vertical-timeline-element-subtitle">Melbourne, VIC</h4>
                                    </VerticalTimelineElement>
                                    <VerticalTimelineElement
                                      className="vertical-timeline-element--work"
                                      contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                      date="November 2025 - March 2026"
                                    >
                                      <h3 className="vertical-timeline-element-title">Fetus core</h3>
                                      <h4 className="vertical-timeline-element-subtitle">Melbourne, VIC</h4>
                                    </VerticalTimelineElement>
                                  </VerticalTimeline>
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