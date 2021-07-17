import { useEffect, useRef } from "react"
import PropTypes from "prop-types"

const useTimeout = (callback, delay) => {
  const timeoutRef = useRef(null)
  const callbackRef = callback

  // Remember the latest callback:
  useEffect(() => {
    callbackRef.current = callback
  }, [callback]) // reset the timeout if the callback changes

  // Set up the timeout:
  useEffect(() => {
    if (typeof delay === "number") {
      timeoutRef.current = window.setTimeout(() => callbackRef.current(), delay)

      // Clear timeout if the component is unmounted or the delay changes:
      return () => window.clearTimeout(timeoutRef.current || 0)
    }
  }, [delay])

  return timeoutRef
}

useTimeout.propTypes = {
  callback: PropTypes.func.isRequired,
  delay: PropTypes.number.isRequired,
}

export default useTimeout
