import React from "react"
import PropTypes from "prop-types"

const PortfolioItemContainer = ({ children }) => (
  <div
    data-sal="slide-up"
    data-sal-duration="700"
    data-sal-easing="ease-in-out"
    className="portfolio-item-container"
  >
    {children}
  </div>
)

PortfolioItemContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PortfolioItemContainer
