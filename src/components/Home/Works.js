import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import Slider from '../SliderAnimation.js'
import data from "../../Projects.json";
export default function Works() {
  const [activeBtn, setActiveBtn] = useState("frontend");
  return (
    <Root id="projects">
      <div className="container" >
        <div className="side_section">Works</div>
        <div className="content_section">
          <h1 className="background_title">Works</h1>
          <h2 className="title">Works of me</h2>
          <div className="project_section">
            <h1>Projects </h1>
            <div className="card_section">
              {data.map((i,ix) => (
                <div className="card">
                  <div className="card__glow"></div>
                  <div className="card__content">
                   
                    <div
                      className="card__image"
                      style={{ "--bg-color": "#a78bfa" }}
                    >
                      <img src={i.coverImage}/>
                    </div>
                    <div className="card__text">
                      <p className="card__title">{i.title}</p>
                      <ul className="card_list"> 
                      <li>{i?.technologies[0]}</li>
                      <li>{i?.technologies[1]}</li>
                     
                      <li>...</li>
                      </ul>
       
                      {/* <p className="card__description">
                        {i.description}
                      </p> */}
                    </div>
                    <div className="card__footer">
                    <Link to={`/project/${i.title}`} className="card__button"> View Project</Link>
                     
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <Slider /> */}
    </Root>
  );
}
const Root = styled.div`
  .container {
    position: relative;
  }
  .content_section {
    max-width: 90%;
    margin: auto;
  }
  .background_title {
    font-family: "Roboto", sans-serif;
    font-size: 288px;
    font-weight: 700;
    color: #ffffff0a;
    position: absolute;
    top: 0px;
    z-index: -1;
  }
  h2.title {
    padding-top: 215px;
    font-family: "Roboto", sans-serif;
    font-size: 64px;
    font-weight: 400;
  }
`;
