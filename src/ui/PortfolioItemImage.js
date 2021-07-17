import React from "react"
import PropTypes from "prop-types"

import Image from "../components/image"

const PortfolioItemImage = ({ image, alt }) => (
  <div className="portfolio-img">
    <Image name={image} alt={alt} />
  </div>
)

PortfolioItemImage.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export default PortfolioItemImage
