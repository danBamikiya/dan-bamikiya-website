import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCog, faInbox } from "@fortawesome/free-solid-svg-icons"
import { faUser, faEye } from "@fortawesome/free-regular-svg-icons"
import {
  faGithubAlt,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

const Icons = () => {
  return (
    <>
      <Link to="/about" className="nav icons" aria-label="About">
        <FontAwesomeIcon icon={faUser} size="3x" />
      </Link>
      <Link to="/about" className="nav icons" aria-label="Skills">
        <FontAwesomeIcon icon={faCog} size="3x" />
      </Link>
      <Link to="/portfolio" className="nav icons" aria-label="Portfolio">
        <FontAwesomeIcon icon={faEye} size="3x" />
      </Link>
      <Link to="/portfolio/#Contact" className="nav icons" aria-label="Contact">
        <FontAwesomeIcon icon={faInbox} size="3x" />
      </Link>

      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          top: "11vh",
          marginTop: "6px",
        }}
      >
        <a
          href="https://github.com/danBamikiya"
          target="_blank"
          className="social icons"
          rel="noopener noreferrer"
          title="Github"
        >
          <FontAwesomeIcon icon={faGithubAlt} size="3x" />
        </a>
        <a
          href="https://linkedin.com/in/dan-bamikiya"
          target="_blank"
          className="social icons"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedinIn} size="3x" />
        </a>
        <a
          href="https://twitter.com/danbamikiya"
          target="_blank"
          className="social icons"
          rel="noopener noreferrer"
          title="Twitter"
        >
          <FontAwesomeIcon icon={faTwitter} size="3x" />
        </a>
        <div className="social-icons-title">
          <span className="social-icons-title-text">Find me on</span>
          <hr style={{ height: "71px" }} />
        </div>
        <hr />
      </div>
    </>
  )
}

export default Icons
