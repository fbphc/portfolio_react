import React from "react";
import "animate.css";
import a01 from "../img/01mini.gif";
import a02 from "../img/02sight.gif";
import a03 from "../img/03bulls.gif";
import a04 from "../img/04bur.gif";
import a05 from "../img/05may.png";

function ProjectCard({ props }) {
  const imgArray = [a01, a02, a03, a05, a04];

  return (
    <>
      <div className="proCardComp animate__animated animate__fadeIn">
        <div>
          <h3>{props.title}</h3>
          <h3>{props.subTitle}</h3>
        </div>
        <div className="imgCont">
          <img src={imgArray[props.id - 1]} alt="project" />
        </div>
        <div>
          <p>{props.description}</p>
          {props.inProgress && <p className="inProgress">In Progress</p>}
        </div>
        <div className="toolsCont">
          {props.info !== undefined &&
            props.info.map((item, idx) => (
              <div className="tools" key={idx + ""}>
                {item}
              </div>
            ))}
        </div>

        <div>
          <button>github</button>
          {props.extLink && <button>page</button>}
          
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
