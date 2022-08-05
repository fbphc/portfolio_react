import React from "react";
import "animate.css";

import terGame from "../img/terGame.gif";

function ProjectCard({ props }) {
  console.log(props);
  return (
    <>
      <div className="proCardComp animate__animated animate__fadeIn">
        <div>
          <h3>{props.title}</h3>
          <h3>{props.subTitle}</h3>
        </div>
        <div className="imgCont">
          <img src={terGame} alt="project" />
        </div>
        <div>
          <p>{props.description}</p>
          <p>{props.inProgress}</p>
        </div>
        <div className="toolsCont">
          {props.info !== undefined &&
            props.info.map((item, idx) => <div className="tools" key={idx + ""}>{item}</div>)}
        </div>

        <div>
          <button>github</button>
          <button>page</button>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
