import React, { useContext } from "react"
import PropTypes from "prop-types"

import CursorContext from "../contexts/cursorContext"

const PortfolioItemContainer = ({ children }) => {
  const [cursorState, setCursorState] = useContext(CursorContext)

  const handleMouseOver = () => {
    setCursorState({
      ...cursorState,
      ...{
        showCursor: false,
      },
    })
  }
  const handleMouseOut = () => {
    setCursorState({
      ...cursorState,
      ...{
        showCursor: true,
      },
    })
  }

  return (
    <div
      data-sal="slide-up"
      data-sal-duration="700"
      data-sal-easing="ease-in-out"
      className="portfolio-item-container default-cursor"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {children}
    </div>
  )
}
PortfolioItemContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PortfolioItemContainer
