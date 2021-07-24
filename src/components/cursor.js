import React, { createRef, useState } from "react"

import { useCursor, useCursorColorChange } from "../utils/hooks/useCursor"
import CursorContext from "../contexts/cursorContext"

const Cursor = ({ children }) => {
  const cursorRef = createRef()

  const [cursorState, setCursorState] = useState({
    defaultColor: true,
    showCursor: true,
  })

  useCursor(cursorRef, cursorState.showCursor)
  useCursorColorChange(cursorRef, cursorState.defaultColor)

  // Movement
  const handleCursorEffect = e => {
    if (cursorState.showCursor) {
      e.persist()
      cursorRef.current.setAttribute(
        "style",
        `top: ${e.clientY - 14}px; left: ${e.clientX - 14}px;`
      )
    }
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
    <CursorContext.Provider value={[cursorState, setCursorState]}>
      <div
        onMouseMove={handleCursorEffect.bind(this)}
        onClick={handleCursorClick}
        style={{ position: "relative" }}
      >
        <div className="cursor" ref={cursorRef}></div>
        {children}
      </div>
    </CursorContext.Provider>
  )
}

export default Cursor
