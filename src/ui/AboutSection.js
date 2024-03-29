import React from "react"
import { Link } from "gatsby"

import LINKS from "../utils/constants/links"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInbox } from "@fortawesome/free-solid-svg-icons"
import {
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
  faDev,
} from "@fortawesome/free-brands-svg-icons"

const AboutSection = () => (
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
        Hello visitor, my name is Dan, a frontend-focused full-stack engineer.
      </p>
      <p>
        For the last 3+ years, I've shipped carefully engineered, high-quality
        developer (DevX) and user (UX) experiences between Madrid, Belgium,
        Portugal, San Francisco and Lagos. I also{" "}
        <a
          href={LINKS.SPEAKING}
          className="about-portfolio-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          speak
        </a>{" "}
        and I'm an open source sustainer 🛠.
      </p>
      <p>
        I get excited to talk about web engineering, developer experience,
        frontend tooling, CSS architecture, web3 and AI 🎤.
      </p>
      <p>
        Feel free to explore this website and check out my{" "}
        <Link to={LINKS.WORKS} className="about-portfolio-link">
          work
        </Link>
        .
      </p>
      <p>View my years of open source work at my github page.</p>
      <div className="about-social-media">
        <ul className="nav-list">
          <li>
            <Link to={LINKS.CONTACT} className="icons-link" title="Contact">
              <FontAwesomeIcon icon={faInbox} size="1x" />
            </Link>
          </li>
          <li>
            <a
              href={LINKS.LINKEDIN}
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
              href={LINKS.GITHUB}
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
              href={LINKS.TWITTER}
              target="_blank"
              className="icons-link"
              rel="noopener noreferrer"
              title="Twitter"
            >
              <FontAwesomeIcon icon={faTwitterSquare} size="1x" />
            </a>
          </li>
          <li>
            <a
              href={LINKS.DEV}
              target="_blank"
              className="icons-link"
              rel="noopener noreferrer"
              title="Dev.to"
            >
              <FontAwesomeIcon icon={faDev} size="1x" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default AboutSection
