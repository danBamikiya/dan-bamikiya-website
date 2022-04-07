import React, { useContext } from "react"

import CLASS_NAMES from "../utils/constants/class-names"
import CursorContext from "../contexts/cursorContext"
import FORMSPREE_URL from "../config/formspree"

const ContactForm = ({ setStatus, glassRefs }) => {
  const handleSendBtnEffect = e => {
    e.target.classList.add("send-effect")
  }
  const handleSendBtnEffectRemove = e => {
    setTimeout(() => {
      e.target.classList.remove("send-effect")
    }, 1000)
  }

  const [cursorState, setCursorState] = useContext(CursorContext)

  const handleMouseOver = () => {
    setCursorState({
      ...cursorState,
      ...{
        defaultColor: false,
      },
    })

    if (
      // Check if the referenced DOM elements already have the "sent" effect class before adding a "remove" effect class
      glassRefs.current[0].classList.contains("glass-circle-1-sent-effect")
    ) {
      glassRefs.current.forEach(elem =>
        elem.classList.add("glass-sent-effect-remove")
      )

      // Reset the DOM elements by removing the added classes after 500ms
      setTimeout(() => {
        glassRefs.current.forEach((elem, index) =>
          elem.classList.remove(
            CLASS_NAMES.GLASS_MESSAGES.EFFECTS[index],
            "glass-sent-effect-remove",
            "failure-msg",
            "success-msg"
          )
        )
        // Reset STATUS state
        setStatus("")
      }, 500)
    }
  }

  const handleMouseOut = () => {
    setCursorState({
      ...cursorState,
      ...{
        defaultColor: true,
      },
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    const form = e.target
    const data = new FormData(form)
    fetch(FORMSPREE_URL, {
      method: form.method,
      headers: {
        Accept: "application/json",
      },
      body: data,
    })
      .then(response => {
        if (response.ok) {
          form.reset()
          setStatus("SUCCESS")
        } else {
          setStatus("ERROR")
          throw new Error("Something seems wrong. Try checking your network")
        }
      })
      .catch(error => {
        console.error("Error:", error)
      })
  }

  return (
    <div className="contact-background">
      <h1>Contact Me</h1>
      <h6>Let's talk!</h6>
      <form method="POST" autoComplete="off" onSubmit={handleSubmit.bind(this)}>
        <ul>
          <li className="half">
            <input
              placeholder="Name"
              type="text"
              name="name"
              id="name"
              onMouseOver={handleMouseOver}
              onFocus={handleMouseOver}
              onMouseOut={handleMouseOut}
              onBlur={handleMouseOut}
              autoComplete="off"
            />
            <label htmlFor="name"></label>
          </li>
          <li className="half">
            <input
              placeholder="Email"
              type="email"
              name="email"
              id="email"
              onMouseOver={handleMouseOver}
              onFocus={handleMouseOver}
              onMouseOut={handleMouseOut}
              onBlur={handleMouseOut}
              autoComplete="off"
            />
            <label htmlFor="email"></label>
          </li>
          <li>
            <textarea
              placeholder="Message"
              name="message"
              id="message"
            ></textarea>
          </li>
          <li>
            <input
              type="submit"
              className="send-button"
              style={{ willChange: "transform" }}
              onMouseDown={handleSendBtnEffect.bind(this)}
              onMouseUp={handleSendBtnEffectRemove.bind(this)}
              value="SEND"
            />
          </li>
        </ul>
      </form>
    </div>
  )
}

export default ContactForm
