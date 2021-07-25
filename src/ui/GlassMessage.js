import React from "react"

import CLASS_NAMES from "../utils/constants/class-names"

const GlassMessage = ({ className, glassRef, status, index }) => (
  <div
    className={`${className} ${
      status === "SUCCESS"
        ? "success-msg"
        : status === "ERROR"
        ? "failure-msg"
        : ""
    } ${
      status === "SUCCESS" || status === "ERROR"
        ? CLASS_NAMES.GLASS_MESSAGES.EFFECTS[index]
        : ""
    }`}
    ref={glassRef}
  >
    {status === "SUCCESS" ? (
      <span>
        <p>Sent</p> <p className="thanks">Thank you!</p>
      </span>
    ) : (
      status === "ERROR" && (
        <span>
          <p>Ooops!</p> <p>There was an error.</p>
          <p>Try again!</p>
        </span>
      )
    )}
  </div>
)

export default GlassMessage
