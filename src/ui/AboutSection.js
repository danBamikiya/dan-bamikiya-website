import React from "react"
import { Link } from "gatsby"

import LINKS from "../utils/constants/links"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInbox } from "@fortawesome/free-solid-svg-icons"
import {
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
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
        Hello visitor, thanks for dropping by! My name is Dan, and I'm a
        software engineer with a passion for sleek user-friendly design and I
        love writing nicely architectured, clean and maintainable code that
        delivers, working with other people on solving tough problems, and
        learning new things along the way!
      </p>
      <p>
        Feel free to explore this website and check out my{" "}
        <Link to={LINKS.WORKS} className="about-portfolio-link">
          work
        </Link>
        !
      </p>
      <p>Also check out my open source contributions at my github page!</p>
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
        </ul>
      </div>
    </div>
  </section>
)

export default AboutSection
