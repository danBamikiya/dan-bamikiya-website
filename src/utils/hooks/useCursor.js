import { useEffect, useRef } from "react"

const useCursorColorChange = (cursorRef, defaultColor) => {
  const initialRender = useRef(true)

  useEffect(() => {
    // Don't change cursor color on initial render
    if (initialRender.current) {
      initialRender.current = false
      return
    }

    // Cursor color change
    if (!defaultColor) {
      cursorRef.current.classList.add("cursor-white")
    } else {
      cursorRef.current.classList.remove("cursor-white")
    }
  }, [defaultColor]) // change cursor color if defaultColor changes
}

const useCursor = (cursorRef, showCursor) => {
  const initialRender = useRef(true)

  useEffect(() => {
    // Don't turn off custom cursor on initial render
    if (initialRender.current) {
      initialRender.current = false
      return
    }

    // Toggle custom cursor
    if (!showCursor) {
      // This class adds a `visibility: hidden` style rule rather than a `display: none` so that no reflows occurs when its togggled
      cursorRef.current.classList.add("remove-cursor")
    } else {
      cursorRef.current.classList.remove("remove-cursor")
    }
  }, [showCursor]) // toggle custom cursor if showCursor changes
}

export { useCursorColorChange, useCursor }
