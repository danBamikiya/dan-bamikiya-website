import React from "react"
import PropTypes from "prop-types"

import PortfolioIcons from "../components/portfolioIcons"

const PortfolioItemDescription = ({
  descriptionTheme,
  subtitle,
  title,
  github: githubLink,
  demo: demoLink,
}) => (
  <div
    className="portfolio-description"
    style={{
      transform: "translate3d(-50%, -10%, 20px)",
    }}
  >
    <div className="subtitle">{subtitle}</div>
    <div className="title" style={{ color: descriptionTheme }}>
      {title}
      <PortfolioIcons
        githubHref={githubLink}
        demoHref={demoLink}
        color={descriptionTheme}
      />
    </div>
  </div>
)

PortfolioItemDescription.propTypes = {
  subtitleStyle: PropTypes.object,
  descriptionTheme: PropTypes.string,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  demo: PropTypes.string.isRequired,
}

export default PortfolioItemDescription
