import React from 'react';
import 'animate.css';

import { GoCode } from 'react-icons/go';
import { IoMdOpen } from 'react-icons/io';

import a01 from '../img/01mini.gif';
import a02 from '../img/02sight.gif';
import a03 from '../img/03bulls.gif';
import a04 from '../img/04bur.gif';
import a06 from '../img/06evcon.gif';
import a07 from '../img/07exgen.gif';

function ProjectCard({ props }) {
  const imgArray = [a02, a06, a03, a01, a04, a07];

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
        </div>
        <div className="toolsCont">
          {props.info !== undefined &&
            props.info.map((item, idx) => (
              <div className="tools" key={idx + ''}>
                {item}
              </div>
            ))}
        </div>

        <div className="ext-linkContainer">
          {props.github && (
            <a
              href={props.github}
              target="_blank"
              rel="noreferrer"
              className="ext-link"
            >
              <GoCode />
            </a>
          )}

          {props.extLink && (
            <a
              href={props.extLink}
              target="_blank"
              rel="noreferrer"
              className="ext-link"
            >
              <IoMdOpen />
            </a>
          )}
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
