import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCog, faInbox } from "@fortawesome/free-solid-svg-icons"
import { faUser, faEye } from "@fortawesome/free-regular-svg-icons"

import LINKS from "../utils/constants/links"

const Header = ({ headerStyle }) => (
  <header>
    <Link to={LINKS.HOME} title="Home" aria-label="Home">
      {" "}
      <p className="logo-text">D</p>
    </Link>

    <div style={headerStyle}>
      <nav className="menu" role="navigation">
        <input
          type="checkbox"
          href="#"
          className="menu-open"
          name="menu-open"
          id="menu-open"
        />
        <label className="menu-open-button" htmlFor="menu-open">
          <span className="hamburger hamburger-1"></span>
          <span className="hamburger hamburger-2"></span>
          <span className="hamburger hamburger-3"></span>
        </label>

        <Link to={LINKS.CONTACT} className="menu-item" aria-label="Contact">
          <FontAwesomeIcon icon={faInbox} />
          <span>Contact</span>
        </Link>
        <Link to={LINKS.WORKS} className="menu-item" aria-label="Portfolio">
          <FontAwesomeIcon icon={faEye} />
          <span>Work</span>
        </Link>
        <Link to={LINKS.SKILLS} className="menu-item" aria-label="Skills">
          <FontAwesomeIcon icon={faCog} />

          <span>Skills</span>
        </Link>
        <Link to={LINKS.ABOUT} className="menu-item" aria-label="About">
          <FontAwesomeIcon icon={faUser} />
          <span>About</span>
        </Link>
        <span className="transparent-cover"></span>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  mainStyle: PropTypes.object,
}

export default Header
