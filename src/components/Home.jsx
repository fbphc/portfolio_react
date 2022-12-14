import React from "react";
import Typewriter from "typewriter-effect"
import { FaFilePdf } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import CV_Fb_2022 from "../pdf/Fabio_Petrella_CV.pdf"
import "animate.css";

function Home() {
  return (
    <>
      <div className="homeComp">
        <div className="aniCont">
          <h2 className="typed animate__animated animate__fadeInDown">
            Fabio Petrella
          </h2>
          <h2  className="typed">

          <Typewriter options={{delay: 60, cursor: ""}} onInit={(typewriter)=>typewriter.pauseFor(800).typeString("full stack").pauseFor(600).deleteAll().pauseFor(300).typeString("web developer").start()} />
          </h2>
          <h2>
           
          </h2>
          <h3 className="animate__animated animate__fadeInDown portfolio">
            Personal Portfolio
          </h3>
            <div className="animate__animated animate__zoomIn line"></div>
          <div className="iconLinks">
            <a
              href={CV_Fb_2022}
              target="_blank"
              rel="noreferrer"
              className="animate__animated animate__zoomIn"
            >
              <FaFilePdf className="icon" />
            </a>
            <a
              href="https://github.com/fbphc"
              target="_blank"
              rel="noreferrer"
              className="animate__animated animate__zoomIn"
            >
              <FaGithub className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/fabio-petrella-676417b5/"
              target="_blank"
              rel="noreferrer"
              className="animate__animated animate__zoomIn"
            >
              <FaLinkedin className="icon" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
