import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import Typed from "react-typed";
import {proArray} from "../dataset/dataset.js"
import "animate.css";

function Projects() {
  const [info, setInfo] = useState({});
  const [toggle, setToggle] = useState(false);

  return (
    <>
      {toggle && <ProjectCard props={info}/>}
      <div className="proComp" onClick={() => toggle && setToggle(false)}>
        <h2 className="animate__animated animate__fadeIn typed">
          <Typed
            strings={["Projects"]}
            typeSpeed={60}
            cursorChar={""}
            startDelay={600}
          />
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
