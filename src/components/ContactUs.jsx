import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {ButtonStyled} from "../StyledComponents/button.styled.js";
import Typewriter from "typewriter-effect"
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
      <div className="animate__animated animate__zoomIn line"></div>

      <form ref={form} onSubmit={sendEmail}>
        <div className="animate__animated animate__fadeInDown input01">
          <input type="text" name="name" placeholder="Name" required />
          <div className="lineForm"></div>
        </div>

        <div className="animate__animated animate__fadeInDown input02">
          <input type="email" name="email" placeholder="E-mail" required />
          <div className="lineForm"></div>
        </div>

        <div className="animate__animated animate__fadeInDown input03">
          <input type="text" name="subject" placeholder="Subject" required />
          <div className="lineForm"></div>
        </div>

        <textarea
          className="animate__animated animate__fadeIn input04"
          name="message"
          rows={6}
          maxLength={400}
          required
        />

        <ButtonStyled type="submit" className="animate__animated animate__fadeIn input05">Send</ButtonStyled>
      </form>
    </div>
  );
};
