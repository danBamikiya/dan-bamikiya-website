import { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import VanillaTilt from "vanilla-tilt"

const useTilt = tiltOptions => {
  const tiltRef = useRef(null)
  useEffect(() => {
    const { current: tiltNode } = tiltRef
    VanillaTilt.init(tiltNode, tiltOptions)

    return () => tiltNode.vanillaTilt.destroy()
  }, [])

  return tiltRef
}

useTilt.propTypes = {
  tiltNode: PropTypes.object.isRequired,
}

export default useTilt
