import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactCard() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [fields, setFields] = useState({ user_name: "", user_email: "", user_message: "" });

  const allFilled = Object.values(fields).every((v) => v.trim() !== "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

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
    <div className="border-1 border-gray-300 rounded-4xl p-5 backdrop-blur-xl shadow-lg">
      <div className="flex flex-col w-150">
        <form ref={formRef} onSubmit={handleSubmit}>
          <label className="flex flex-col">
            Name
            <input 
              onKeyDown={(e) => e.key === " " && e.stopPropagation()}
              onChange={handleChange}
              className="border-1 mt-2 mb-2 border-gray-300 rounded-xl p-2" 
              name="user_name" 
              placeholder="Enter your name..."/>
          </label>
          <label className="flex flex-col">
            Email
            <input 
              onKeyDown={(e) => e.key === " " && e.stopPropagation()}
              onChange={handleChange}
              className="border-1 mt-2 mb-2 border-gray-300 rounded-xl p-2" 
              name="user_email" 
              placeholder="Enter your email..."/>
          </label>
          <label className="flex flex-col">
            Message
            <textarea 
              onKeyDown={(e) => e.key === " " && e.stopPropagation()}
              onChange={handleChange}
              className="border-1 h-50 mt-2 mb-2 border-gray-300 rounded-xl p-2 resize-none align-top" 
              name="user_message" 
              placeholder="Enter your message..."/>
          </label>
          <button 
            className="border-1 content-center w-150 mt-5 border-gray-300 rounded-3xl text-white bg-black"
            type="submit"
            disabled={!allFilled}
          >
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