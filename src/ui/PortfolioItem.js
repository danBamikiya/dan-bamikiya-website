import React from "react"
import PropTypes from "prop-types"

import Tilt from "../components/tilt"

import PortfolioItemImage from "./PortfolioItemImage"
import PortfolioItemDescription from "./PortfolioItemDescription"

const PortfolioItem = ({ project }) => (
  <Tilt
    className="portfolio-item"
    style={{
      transformStyle: "preserve-3d",
      transform: "perspective(1000px)",
    }}
  >
    <PortfolioItemImage image={project.image} alt={project.alt} />
    <PortfolioItemDescription {...project} />
  </Tilt>
)

PortfolioItem.propTypes = {
  project: PropTypes.object.isRequired,
}

export default PortfolioItem
