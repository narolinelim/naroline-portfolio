import { ScrollContainer, Animator, ScrollPage, batch, Fade, FadeOut, FadeIn, MoveOut, Move } from 'react-scroll-motion';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';

const FadeUp = batch(Fade(), Move());

function Resume() {
  return (
    <div id="resume-section">
      <ScrollContainer>
        <ScrollPage>
          <div className="flex justify-center items-center h-screen">
            <Animator animation={FadeUp}>
              <div className="w-300">
                <Animator animation={Fade()}>
                  <Timeline position="alternate">
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'blue'}} />
                        <TimelineDot>
                          <RepeatIcon />
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h5" component="span">
                          Research Software Engineer Intern
                        </Typography>
                        <Typography variant="h6">WEHI</Typography>
                        <Typography>Built a budget forecasting web app with Shiny</Typography>
                      </TimelineContent>
                    </TimelineItem>
                  </Timeline>
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