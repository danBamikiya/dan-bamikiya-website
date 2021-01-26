import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

import CursorContext from "./cursorContext"

import "./layout.css"
import "../css/cursor.min.css"
import "../css/circles.min.css"

const Layout = ({ children, mainStyle, mainClass, notFoundStyle }) => {
  const cursorRef = React.createRef()
  const [hover, setHover] = useState(false)

  useEffect(() => {
    // Cursor color change
    if (hover) {
      cursorRef.current.classList.add("border-color")
    } else {
      cursorRef.current.classList.remove("border-color")
    }
  }, [hover])

  // Movement
  const handleCursorEffect = e => {
    e.persist()
    cursorRef.current.setAttribute(
      "style",
      `top: ${e.clientY - 14}px; left: ${e.clientX - 14}px;`
    )
  }

  // Click Effect
  const handleCursorClick = () => {
    cursorRef.current.classList.add("expand")

    setTimeout(() => {
      if (cursorRef.current) {
        cursorRef.current.classList.remove("expand")
      }
    }, 500)
  }

  return (
    <>
      <CursorContext.Provider value={[hover, setHover]}>
        <div
          onMouseMove={handleCursorEffect.bind(this)}
          onClick={handleCursorClick}
          style={(notFoundStyle, { position: "relative" })}
        >
          <div className="cursor" ref={cursorRef}></div>
          <main role="main" className={mainClass} style={mainStyle}>
            {children}
          </main>
          <div className="page-circle-1"></div>
          <div className="page-circle-2"></div>
          <div className="page-circle-3"></div>
        </div>
      </CursorContext.Provider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  mainStyle: PropTypes.object,
  mainClass: PropTypes.string,
  notFoundStyle: PropTypes.object,
}

export default Layout
