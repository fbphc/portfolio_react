import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import "animate.css";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_YOUR_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="formCont">
      <h2 className="animate__animated animate__fadeInDown typed">Contact</h2>

      <form ref={form} onSubmit={sendEmail}>

        <div className="animate__animated animate__fadeInDown">
          <input type="text" name="name" placeholder="Name" required />
          <div className="lineForm"></div>
        </div>

        <div className="animate__animated animate__fadeInDown">
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            required
          />
          <div className="lineForm"></div>
        </div>

        <div className="animate__animated animate__fadeInDown">
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />
          <div className="lineForm"></div>
        </div>

        <textarea
          name="message"
          rows={6}
          maxLength={400}
          required
        />

        <input type="submit" value="Send" />
      </form>
    </div>
  );
};
