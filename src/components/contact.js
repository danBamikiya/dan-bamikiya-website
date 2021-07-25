import React, { useState, useRef } from "react"

import ContactForm from "../ui/ContactForm"
import GlassMessages from "../ui/GlassMessages"

const Contact = () => {
  const glassRefs = useRef([])
  const [status, setStatus] = useState("")

  return (
    <section
      data-sal="zoom-in"
      data-sal-duration="700"
      data-sal-easing="ease-in-out"
      className="contact"
      id="contact"
    >
      <ContactForm setStatus={setStatus} glassRefs={glassRefs} />
      <GlassMessages status={status} glassRefs={glassRefs} />
    </section>
  )
}

export default Contact
