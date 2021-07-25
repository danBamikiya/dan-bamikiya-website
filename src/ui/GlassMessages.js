import React from "react"

import CLASS_NAMES from "../utils/constants/class-names"
import GlassMessage from "./GlassMessage"

const GlassMessages = ({ status, glassRefs }) => (
  <>
    {CLASS_NAMES.GLASS_MESSAGES.BASE.map((className, index) => (
      <GlassMessage
        className={className}
        glassRef={element => (glassRefs.current[index] = element)}
        status={status}
        index={index}
      />
    ))}
  </>
)

export default GlassMessages
