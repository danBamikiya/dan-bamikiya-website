import React from "react"

import {
  HTML5,
  CSS3,
  Javascript,
  ReactJS,
  Nodejs,
  Redis,
  Sass,
  Angular,
  Babel,
  Bootstrap,
  Docker,
  Express,
  Gatsby,
  Git,
  Gulp,
  Heroku,
  MongoDB,
  TailwindCSS,
  Typescript,
  Webpack,
  Agile,
  Terraform,
  HCL,
} from "../utils/constants/svg-paths"

const SkillSection = () => (
  <section
    data-sal="slide-up"
    data-sal-delay="500"
    data-sal-duration="600"
    data-sal-easing="ease-out"
    id="skills"
    className="skills"
  >
    <div className="skills-heading">
      <h1>Skills</h1>
      <h6>What I'm good at</h6>
    </div>
    <div className="skills-details">
      <div className="skills-details-languages">
        <span>Languages</span>
        <div>
          <div
            data-sal="slide-right"
            data-sal-duration="500"
            data-sal-easing="ease-in-out"
            className="language"
          >
            <div>
              <HTML5 />
            </div>
            <span style={{ paddingRight: 10 }}>HTML5</span>
          </div>
          <div
            data-sal="slide-left"
            data-sal-duration="500"
            data-sal-easing="ease-in-out"
            className="language"
          >
            <div>
              <CSS3 />
            </div>
            <span>CSS3</span>
          </div>
          <div
            data-sal="slide-right"
            data-sal-duration="500"
            data-sal-easing="ease-in-out"
            className="language"
          >
            <div>
              <Sass />
            </div>
            <span>SASS</span>
          </div>
          <div
            data-sal="slide-left"
            data-sal-duration="500"
            data-sal-easing="ease-in-out"
            className="language"
          >
            <div>
              <Javascript />
            </div>
            <span>Javascript</span>
          </div>
          <div
            data-sal="slide-right"
            data-sal-duration="500"
            data-sal-easing="ease-in-out"
            className="language"
          >
            <div>
              <Typescript />
            </div>
            <span>Typescript</span>
          </div>
          <div
            data-sal="slide-left"
            data-sal-duration="500"
            data-sal-easing="ease-in-out"
            className="language"
          >
            <div>
              <HCL />
            </div>
            <span>HCL</span>
          </div>
        </div>
      </div>
      <div className="skills-details-tools">
        <span>Tools</span>
        <div>
          <div
            data-sal="slide-right"
            data-sal-duration="500"
            data-sal-easing="ease-in-out"
            className="tool"
          >
            <div>
              <Nodejs />
            </div>
            <span>NodeJs</span>
          </div>
          <div
            data-sal="slide-left"
            data-sal-duration="500"
            data-sal-easing="ease-in-out"
            className="tool"
          >
            <div>
              <Git />
            </div>
            <span>Git</span>
          </div>
          <div
            data-sal="slide-right"
            data-sal-duration="500"
            data-sal-easing="ease-in-out"
            className="tool"
          >
            <div>
              <Docker />
            </div>
            <span>Docker</span>
          </div>
          <div
            data-sal="slide-left"
            data-sal-duration="500"
            data-sal-easing="ease-in-out"
            className="tool"
          >
            <div>
              <Terraform />
            </div>
            <span>Terraform</span>
          </div>
          <div
            data-sal="slide-right"
            data-sal-duration="500"
            data-sal-easing="ease-in-out"
            className="tool"
          >
            <div>
              <Webpack />
            </div>
            <span>Webpack</span>
          </div>
          <div
            data-sal="slide-left"
            data-sal-duration="500"
            data-sal-easing="ease-in-out"
            className="tool"
          >
            <div style={{ paddingLeft: "30px" }}>
              <Gulp />
            </div>
            <span>Gulp</span>
          </div>
          <div
            data-sal="slide-right"
            data-sal-duration="500"
            data-sal-easing="ease-in-out"
            className="tool"
          >
            <div>
              <Babel />
            </div>
            <span>Babel</span>
          </div>
          <div
            data-sal="slide-left"
            data-sal-duration="500"
            data-sal-easing="ease-in-out"
            className="tool"
          >
            <div>
              <MongoDB />
            </div>
            <span>MongoDB</span>
          </div>
          <div
            data-sal="slide-right"
            data-sal-duration="500"
            data-sal-easing="ease-in-out"
            className="tool"
          >
            <div>
              <Redis />
            </div>
            <span>Redis</span>
          </div>
          <div
            data-sal="slide-left"
            data-sal-duration="500"
            data-sal-easing="ease-in-out"
            className="tool"
          >
            <div>
              <Heroku />
            </div>
            <span>Heroku</span>
          </div>
          <div
            data-sal="slide-right"
            data-sal-duration="500"
            data-sal-easing="ease-in-out"
            className="tool"
          >
            <div>
              <Agile />
            </div>
            <span>Agile Development</span>
          </div>
        </div>
      </div>
      <div className="skills-details-frameworks">
        <span>Frameworks</span>
        <div>
          <div
            data-sal="slide-left"
            data-sal-duration="500"
            data-sal-easing="ease-in-out"
            className="framework"
          >
            <div>
              <ReactJS />
            </div>
            <span>React</span>
          </div>
          <div
            data-sal="slide-right"
            data-sal-duration="500"
            data-sal-easing="ease-in-out"
            className="framework"
          >
            <div>
              <Angular />
            </div>
            <span>Angular</span>
          </div>
          <div
            data-sal="slide-left"
            data-sal-duration="500"
            data-sal-easing="ease-in-out"
            className="framework"
          >
            <div>
              <Express />
            </div>
            <span>ExpressJS</span>
          </div>
          <div
            data-sal="slide-right"
            data-sal-duration="500"
            data-sal-easing="ease-in-out"
            className="framework"
          >
            <div>
              <Gatsby />
            </div>
            <span>Gatsby</span>
          </div>
          <div
            data-sal="slide-left"
            data-sal-duration="500"
            data-sal-easing="ease-in-out"
            className="framework"
          >
            <div>
              <Bootstrap />
            </div>
            <span>Bootstrap</span>
          </div>
          <div
            data-sal="slide-right"
            data-sal-duration="500"
            data-sal-easing="ease-in-out"
            className="framework"
          >
            <div>
              <TailwindCSS />
            </div>
            <span>Tailwind CSS</span>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default SkillSection
