import React, { useRef } from "react"

import ContactForm from "./contact"
import PortfolioItems from "./portfolioItems"

import useTimeout from "../utils/hooks/useTimeout"

const PortfolioMainSection = () => {
  const sectionRef = useRef(null)

  const setTransition = () =>
    sectionRef.current.classList.add("portfolio-transition")

  useTimeout(setTransition, 300)

  return (
    <section className="portfolio-page-main">
      <section
        data-sal="slide-up"
        data-sal-delay="500"
        data-sal-duration="600"
        data-sal-easing="ease-out"
        id="Work"
        className="portfolio"
        ref={sectionRef}
      >
        <div className="portfolio-heading">
          <h1>Recent Work</h1>
          <h6 style={{ fontSize: "1.5rem" }}>Projects | Explorations</h6>
        </div>
        <div className="portfolio-details">
          <PortfolioItems />
        </div>
      </section>
      <ContactForm />
    </section>
  )
}

export default PortfolioMainSection
