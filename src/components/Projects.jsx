import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import Typed from "react-typed";

import "animate.css";

function Projects() {
  const [info, setInfo] = useState({});
  const [toggle, setToggle] = useState(true);
  function handleOnClick() {}
  const proArray = [
    {
      id: 1,
      title: "Minigame",
      stateComplete: true,
      description: "Rock, Scissor, Paper",
    },
    {
      id: 2,
      title: "Sighspot",
      stateComplete: false,
      description: "Movie Finder",
    },
    {
      id: 3,
      title: "Shrugman/Bulls and Cows",
      stateComplete: true,
      description: "NodeJs - Command Line game",
    },
    {
      id: 4,
      title: "DCI final project",
      stateComplete: false,
      description: "E-commerce App",
    },
    {
      id: 5,
      title: "Burger Benny",
      stateComplete: true,
      description: "dajeforte asdasdasdasdas",
    },
  ];

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
                key={item.id + ""}
                onClick={() => {
                  setInfo(item);
                  setToggle(true);
                }}
              >
                <div className={`sub-box sub-box-${item.id}`}>
                  <div className="boxDescription">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
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
