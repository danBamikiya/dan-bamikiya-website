import React from "react"
import PropTypes from "prop-types"

import PortfolioIcons from "../components/portfolioIcons"

const PortfolioItemDescription = ({
  subtitleStyle,
  descriptionTheme,
  subtitle,
  title,
  github: githubLink,
  demo: demoLink,
}) => (
  <div
    className="portfolio-description"
    style={{
      paddingBottom: "5.5vw",
      transform: "translate3d(-50%, -10%, 20px)",
    }}
  >
    <div className="subtitle" style={subtitleStyle}>
      {subtitle}
    </div>
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
