import React from "react"
import PropTypes from "prop-types"

import Cursor from "./cursor"

import "../scss/layout.scss"
import "../scss/cursor.scss"
import "../scss/circles.scss"

const Layout = ({ children, mainStyle, mainClass }) => (
  <Cursor>
    <main role="main" className={mainClass} style={mainStyle}>
      {children}
    </main>
    <div className="page-circle-1"></div>
    <div className="page-circle-2"></div>
    <div className="page-circle-3"></div>
  </Cursor>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  mainStyle: PropTypes.object,
  mainClass: PropTypes.string,
}

export default Layout
