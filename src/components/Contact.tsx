import { ScrollContainer, Animator, ScrollPage, batch, Fade, FadeOut, FadeIn, MoveOut, Move } from 'react-scroll-motion';
import ContactCard from './ContactCard';

const FadeUp = batch(Fade(), Move());

function Contact() {
  return (
    <div id="contact-section">
      <ScrollContainer>
        <ScrollPage>
          <div className="flex justify-center items-center h-screen">
            <Animator animation={FadeUp}>
              <div className="flex flex-col items-center justify-items-center">
                <h1 className="mb-5">Contact Me 😊</h1>
                <ContactCard />
              </div>
            </Animator>
          </div>
        </ScrollPage>

      </ScrollContainer>
    </div>
  
  );
}


export default Contact;