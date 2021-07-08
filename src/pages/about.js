import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"

import "../css/about.min.css"

import HTML5 from "../../svgs/html-5.svg"
import CSS3 from "../../svgs/css-5.svg"
import Javascript from "../../svgs/javascript.svg"
import ReactJS from "../../svgs/react-2.svg"
import Nodejs from "../../svgs/nodejs.svg"
import Redis from "../../svgs/redis.svg"
import Sass from "../../svgs/sass-1.svg"
import Angular from "../../svgs/angular-icon-1.svg"
import Babel from "../../svgs/babel-10.svg"
import Bootstrap from "../../svgs/bootstrap-4.svg"
import Docker from "../../svgs/docker.svg"
import Express from "../../svgs/express-109.svg"
import Gatsby from "../../svgs/gatsby.svg"
import Git from "../../svgs/git-icon.svg"
import Gulp from "../../svgs/gulp.svg"
import Heroku from "../../svgs/heroku.svg"
import MongoDB from "../../svgs/mongodb-icon-1.svg"
import TailwindCSS from "../../svgs/tailwindcss.svg"
import Typescript from "../../svgs/typescript.svg"
import Webpack from "../../svgs/webpack.svg"
import Agile from "../../svgs/agile.svg"
import Terraform from "../../svgs/terraformio-icon.svg"
import HCL from "../../svgs/hashicorp-configuration-language.svg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInbox } from "@fortawesome/free-solid-svg-icons"
import {
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons"

const AboutPage = () => {
  const about = {
    about_nav: {
      display: "flex",
    },
    about_links: {
      linkedin: "https://linkedin.com/in/dan-bamikiya",
      github: "https://github.com/danBamikiya",
      twitter: "https://twitter.com/danbamikiya",
    },
  }

  return (
    <Layout>
      <SEO title="About" />
      <Header headerStyle={about.about_nav} />
      <section className="about-page-main">
        <section
          data-sal="slide-up"
          data-sal-delay="500"
          data-sal-duration="600"
          data-sal-easing="ease-out"
          className="about"
        >
          <div className="about-details">
            <div className="about-heading">
              <h1>About</h1>
              <h6>Myself</h6>
            </div>
            <p>
              Hello visitor, thanks for dropping by! My name is Dan, and I'm a
              software engineer with a passion for sleek user-friendly design
              and I love writing nicely architectured, clean and maintainable
              code that delivers, working with other people on solving tough
              problems, and learning new things along the way!
            </p>
            <p>
              Feel free to explore this website and check out my{" "}
              <Link to="/portfolio" className="about-portfolio-link">
                work
              </Link>
              !
            </p>
            <div className="about-social-media">
              <ul className="nav-list">
                <li>
                  <Link
                    to="/portfolio/#Contact"
                    className="icons-link"
                    title="Contact"
                  >
                    <FontAwesomeIcon icon={faInbox} size="1x" />
                  </Link>
                </li>
                <li>
                  <a
                    href={about.about_links.linkedin}
                    target="_blank"
                    className="icons-link"
                    rel="noopener noreferrer"
                    title="Linkedin"
                  >
                    <FontAwesomeIcon icon={faLinkedin} size="1x" />
                  </a>
                </li>
                <li>
                  <a
                    href={about.about_links.github}
                    target="_blank"
                    className="icons-link"
                    rel="noopener noreferrer"
                    title="Github"
                  >
                    <FontAwesomeIcon icon={faGithubSquare} size="1x" />
                  </a>
                </li>
                <li>
                  <a
                    href={about.about_links.twitter}
                    target="_blank"
                    className="icons-link"
                    rel="noopener noreferrer"
                    title="Twitter"
                  >
                    <FontAwesomeIcon icon={faTwitterSquare} size="1x" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section
          data-sal="slide-up"
          data-sal-delay="500"
          data-sal-duration="600"
          data-sal-easing="ease-out"
          id="Skills"
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
                  data-sal="slide-left"
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
                  data-sal="slide-right"
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
                  data-sal="slide-left"
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
                  data-sal="slide-right"
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
      </section>
    </Layout>
  )
}

export default AboutPage
