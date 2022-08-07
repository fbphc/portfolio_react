import React from "react";
import "animate.css";
import a001 from "../img/a001.jpg"
import a002 from "../img/a002.jpg"
import a003 from "../img/a003.jpg"
import a004 from "../img/a004.jpg"


import terGame from "../img/terGame.gif";

function ProjectCard({ props }) {
  const imgArray = [a001, a002,terGame, a003, a004 ]
  console.log(props);
  return (
    <>
      <div className="proCardComp animate__animated animate__fadeIn">
        <div>
          <h3>{props.title}</h3>
          <h3>{props.subTitle}</h3>
        </div>
        <div className="imgCont">
          <img src={imgArray[props.id -1]} alt="project" />
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
