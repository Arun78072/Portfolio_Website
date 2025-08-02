import React, { useState } from "react";
import styled from "styled-components";
export default function About() {
  const [activeBtn, setActiveBtn] = useState("frontend");
  return (
    <Root id="about">
      <div className="container">
        <div className="side_section">About Me</div>
        <div className="content_section">
          <h1 className="background_title">About</h1>
          <h2 className="title">About me</h2>

          <div className="about_section">
            <div>
              <h4>WHAT I DO</h4>

              {/* Frontend  */}

              <div className="action_button active">
                <div>
                  <h2>Front-end Development </h2>
                  <img src="/images/tag.png" />
                </div>
                <p>
                  Dashboards and Admin Panels ,Single Page Applications ,
                  Real-time Applications ,Web Applications , E-commerce , Theme
                  Websites ,Progressive Web Apps (PWAs) ...
                </p>
                <div className="languages">
                  <h5>React.js</h5>
                  <h5>Next.js</h5>
                  <h5>Redux</h5>
                  <h5>JavaScript</h5>
                  <h5>TypeScript</h5>
                  <h5>HTML5</h5>
                  <h5>CSS3</h5>
                  <h5>Tailwind CSS</h5>
                  <h5>Material UI</h5>
                  <h5>Bootstrap</h5>
                  <h5>styled-components</h5>
                  <h5>Formik</h5>
                  <h5>ApexCharts</h5>
                  <h5>Web3.js</h5>
                  <h5>Ether.js</h5>
                </div>
              </div>
              <div>
                <h4>INTRODUCE</h4>
                <div className="intro_content">
                  <h2>
                    I’m a Frontend Developer with a Passion for Crafting
                    Engaging Web Experiences
                  </h2>
                  <h3>
                    <i>Every great design begins with an even better story.</i>
                  </h3>
                  <p>
                    I’m a Frontend Developer with over 5 years of experience
                    building responsive, scalable, and modern web applications.
                    Throughout my journey, I’ve had the opportunity to work on
                    diverse projects—ranging from startups to production-grade
                    platforms—where I contributed to both design and
                    functionality.
                    <br />
                    <br />
                    My core expertise lies in technologies like{" "}
                    <strong>
                      React.js, Next.js, Redux, JavaScript, TypeScript,
                    </strong>{" "}
                    and <strong>Web3</strong>. I also have hands-on experience
                    with libraries and tools such as{" "}
                    <strong>Ether.js, Formik, ApexCharts,</strong> and UI
                    frameworks like{" "}
                    <strong>Tailwind CSS, Material UI, Bootstrap,</strong> and{" "}
                    <strong>styled-components</strong>.
                    <br />
                    <br />
                    I'm deeply passionate about clean UI, optimized performance,
                    and creating user-centric digital experiences. I believe in
                    continuous learning and love diving into new tools and
                    frameworks to stay ahead in the evolving frontend ecosystem.
                  </p>
                </div>
              </div>

              {/* Backend */}

              <div className="action_button active">
                <div>
                  <h2>Backend Development </h2>
                  <img src="/images/tag.png" />
                </div>
                <p>
                  REST APIs, Admin Dashboards, Web Applications, Authentication
                  Systems, CMS Platforms, Analytics Dashboards, Real-time Apps,
                  E-commerce Backends, SaaS Platforms, Microservices ...
                </p>

                <div className="languages">
                  <h5>Node.js</h5>
                  <h5>Express.js</h5>
                  <h5>Sails.js</h5>
                  <h5>MongoDB</h5>
                  <h5>JWT Auth</h5>
                  <h5>REST APIs</h5>
                </div>
              </div>
              <div>
                <h4>INTRODUCE</h4>
                <div className="intro_content">
                  <h2>
                    I’m a Backend Developer focused on Building Scalable and
                    Efficient Systems
                  </h2>
                  <h3>
                    <i>
                      Great functionality comes from a strong and secure backend
                      foundation.
                    </i>
                  </h3>
                  <p>
                    Over the past 1.5 years, I've been actively working as a
                    Backend Developer, creating robust APIs and building secure,
                    scalable server-side applications. I’ve collaborated with
                    cross-functional teams to architect solutions that power
                    real-world platforms, ensuring performance, reliability, and
                    maintainability.
                    <br />
                    <br />
                    My backend skill set includes working with technologies like{" "}
                    <strong>Node.js, Express,</strong> and{" "}
                    <strong>Sails.js</strong> to build RESTful and real-time
                    services.
                    <br />
                    <br />
                    On the data side, I'm experienced with{" "}
                    <strong>MongoDB</strong>, handling everything from schema
                    design to performance optimization.
                    <br />
                    <br />I follow best practices for API security, error
                    handling, and asynchronous operations—and I’m always
                    refining my ability to write clean, scalable code that
                    integrates seamlessly with frontend systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
  .about_section {
    display: flex;
    gap: 20px;
    > div {
      flex: 1;
      h4 {
        font-weight: 100;
        font-size: 16px;
        &::before {
          content: "";
          background: #fff;
          display: inline-block;
          width: 30px;
          height: 1px;
          margin: 6px;
        }
      }
      .action_button {
        background-color: #26272d;
        border-radius: 12px;
        padding: 20px;
        cursor: pointer;
        margin-bottom: 20px;
        margin-top: 50px;
        > div {
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
        }
        img {
          mix-blend-mode: luminosity;
        }
        h2 {
          font-weight: 400;
        }
        p {
          font-family: "Ubuntu", sans-serif;
          font-size: 18px;
          line-height: 30px;
          font-weight: 100;
        }
        &.active {
          h2 {
            color: #4fffa0;
          }
          img {
            mix-blend-mode: unset;
          }
        }
        .languages {
          flex-wrap: wrap;
          justify-content: start;
          gap: 10px;
          margin-top: 10px;

          h5 {
            background: #000;
            padding: 4px;
            border-radius: 4px;
            font-weight: 400;
          }
        }
      }
      .intro_content {
        h2 {
          font-size: 42px;
          font-weight: 400;
        }
        h3 {
          font-weight: 200;
          font-size: 36px;
          margin: 20px 0px;
        }
        p {
          font-weight: 100;
          font-size: 24px;
          color: #ffffff63;
        }
      }
    }
  }
`;
