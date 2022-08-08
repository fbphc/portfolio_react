import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

import Typewriter from "typewriter-effect"

import {proArray} from "../dataset/dataset.js"
import "animate.css";

function Projects() {
  const [info, setInfo] = useState({});
  const [toggle, setToggle] = useState(false);

  return (
    <>
      {toggle && <ProjectCard props={info}/>}
      <div className="proComp" onClick={() => toggle && setToggle(false)}>
      <h2  className="typed">    
      <Typewriter options={{delay: 60, cursor: ""}} onInit={(typewriter)=>typewriter.pauseFor(500).typeString("projects").start()} />
      </h2>
        <h2 className="animate__animated animate__fadeIn typed">
        </h2>
        <div className="projects-grid">
          {proArray.map((item) => {
            return (
              <div
                className={`box box-${item.id} animate__animated  animate__fadeInUp`}
                key={item.id + "key"}
                onClick={() => {
                  setInfo(item);
                  setToggle(true);
                }}
              >
                <div className={`sub-box sub-box-${item.id}`}>
                  <div className="boxDescription">
                    
                    <h3>{item.title}</h3>
                    <p>{item.subTitle}</p>
                    <p>{item.status}</p>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Projects;
