import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons"

const PortfolioIcons = ({ githubHref, demoHref, color }) => (
  <span className="portfolio-description-title-links">
    {" "}
    <a
      href={githubHref}
      target="_blank"
      rel="noopener noreferrer"
      title="Github"
    >
      <FontAwesomeIcon icon={faGithubAlt} size="2x" />
    </a>
    <a
      href={demoHref}
      style={{ color: color }}
      target="_blank"
      rel="noopener noreferrer"
      title="Demo"
    >
      <FontAwesomeIcon icon={faExternalLinkAlt} size="sm" />
    </a>
  </span>
)

PortfolioIcons.propTypes = {
  githubHref: PropTypes.string.isRequired,
  demoHref: PropTypes.string.isRequired,
  color: PropTypes.string,
}

export default PortfolioIcons
