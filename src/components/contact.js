import React, { useContext, useRef, useState } from "react"

import CursorContext from "./cursorContext"

const ContactForm = () => {
  const getFormURL = "https://formspree.io/f/xdopbdqg"
  const sendRef = useRef(null)
  const glassRefs = useRef([])
  const indices = [0, 1, 2]
  const glassSentEffects = [
    "glass-circle-1-sent-effect",
    "glass-square-1-sent-effect",
    "glass-square-2-sent-effect",
  ]

  const [hover, setHover] = useContext(CursorContext)

  glassRefs.current = [0, 1, 2].map(
    (ref, index) => (glassRefs.current[index] = React.createRef())
  )

  const sayThankYou = () => {
    indices.map(index => {
      glassRefs.current[index].current.classList.add(glassSentEffects[index])
    })
  }

  const handleMouseOver = () => {
    setHover(true)
    if (
      glassRefs.current[0].current.classList.contains(
        "glass-circle-1-sent-effect"
      )
    ) {
      indices.map(index => {
        glassRefs.current[index].current.classList.add(
          "glass-sent-effect-remove"
        )
      })
      setTimeout(() => {
        indices.map(index => {
          glassRefs.current[index].current.classList.remove(
            glassSentEffects[index]
          )
          glassRefs.current[index].current.classList.remove(
            "glass-sent-effect-remove"
          )
        })
      }, 500)
    }
  }
  const handleMouseOut = () => {
    setHover(false)
  }

  const [status, setStatus] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    sendRef.current.classList.add("send-effect")
    setTimeout(() => {
      sendRef.current.classList.remove("send-effect")
    }, 1000)

    const form = e.target
    const data = new FormData(form)
    fetch(form.action, {
      method: form.method,
      headers: {
        Accept: "application/json",
      },
      body: data,
    })
      .then(response => {
        if (!response.ok) {
          setStatus("ERROR")
          sayThankYou()
          throw new Error("Something seems wrong. Try checking your network")
        } else {
          form.reset()
          setStatus("SUCCESS")
          sayThankYou()
        }
      })
      .catch(error => {
        console.error("Error:", error)
      })
  }

  return (
    <section
      data-sal="zoom-in"
      data-sal-duration="700"
      data-sal-easing="ease-in-out"
      className="contact"
      id="Contact"
    >
      <div className="contact-background">
        <h1>Contact Me</h1>
        <h6>Let's talk I'm very social</h6>
        <form
          method="POST"
          action={getFormURL}
          autoComplete="off"
          onSubmit={handleSubmit.bind(this)}
        >
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
                value="SEND"
                ref={sendRef}
              />
            </li>
          </ul>
        </form>
      </div>

      <div className="glass-circle-1" ref={glassRefs.current[0]}>
        {status === "SUCCESS" ? (
          <span style={{ color: "mediumseagreen" }}>
            <p>Sent</p> <p className="thanks">Thank you!</p>
          </span>
        ) : (
          status === "ERROR" && (
            <span
              style={{
                color: "blue",
                width: "100px",
                transform: "scale(1) !important",
              }}
            >
              <p style={{ color: "firebrick", marginBottom: "0.1rem" }}>
                Ooops!
              </p>{" "}
              <p style={{ marginBottom: "0.1rem" }}>There was an error.</p>
              <p style={{ marginBottom: "0.1rem" }}>Try again!</p>
            </span>
          )
        )}
      </div>
      <div className="glass-square-1" ref={glassRefs.current[1]}>
        {status === "SUCCESS" ? (
          <span style={{ color: "mediumseagreen" }}>
            <p>Sent</p> <p className="thanks">Thank you!</p>
          </span>
        ) : (
          status === "ERROR" && (
            <span
              style={{
                color: "blue",
                width: "100px",
                transform: "scale(1) !important",
              }}
            >
              <p style={{ color: "firebrick", marginBottom: "0.1rem" }}>
                Ooops!
              </p>{" "}
              <p style={{ marginBottom: "0.1rem" }}>There was an error.</p>
              <p style={{ marginBottom: "0.1rem" }}>Try again!</p>
            </span>
          )
        )}
      </div>
      <div className="glass-square-2" ref={glassRefs.current[2]}>
        {status === "SUCCESS" ? (
          <span style={{ color: "mediumseagreen" }}>
            <p>Sent</p> <p className="thanks">Thank you!</p>
          </span>
        ) : (
          status === "ERROR" && (
            <span
              style={{
                color: "blue",
                transform: "scale(1) !important",
                marginBottom: "0.1rem",
              }}
            >
              <p style={{ color: "firebrick" }}>Ooops!</p>{" "}
              <p style={{ marginBottom: "0.1rem" }}>There was an error.</p>
              <p style={{ marginBottom: "0.1rem" }}>Try again!</p>
            </span>
          )
        )}
      </div>
    </section>
  )
}

export default ContactForm
