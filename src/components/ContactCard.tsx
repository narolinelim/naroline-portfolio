import { useReducer, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactCard() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = (e: React.ChangeEvent) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_qgjixhj",
        "template_3fmjmji",
        formRef.current!,
        { publicKey: "36Gwaf5HP7kQrcYS0" }
      )
      .then(() => setStatus("success"))
      .catch(() => setStatus("error"));

  };

  return (
    <div className="border-1 border-gray-300 rounded-4xl p-5">
      <div className="flex flex-col w-100">
        <form ref={formRef} onSubmit={handleSubmit}>
          <label className="flex flex-col">
            Name
            <input 
              className="border-1" 
              name="user_name" 
              type="text"
              placeholder="Enter your name..."/>
          </label>
          <label className="flex flex-col">
            Email
            <input 
              className="border-1" 
              name="user_email" 
              type="text"
              placeholder="Enter your email..."/>
          </label>
          <label className="flex flex-col">
            Message
            <input 
              className="border-1" 
              name="user_message" 
              type="text"
              placeholder="Enter your message..."/>
          </label>
          <button 
            className="border-1"
            type="submit">
              Send
          </button>

          {status == "success" && <p>Message sent!</p>}
          {status == "error" && <p>Try again!</p>}
        </form>
      </div>
    </div>
  )
}

export default ContactCard;