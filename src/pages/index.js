import React from "react"

import Layout from "../components/layout"
import Header from "../components/header"
import Image from "../components/image"
import SEO from "../components/seo"
import Icons from "../components/icons"
import "../scss/index.scss"

const IndexPage = () => {
  const indexMainClass = "index-main"

  return (
    <Layout mainClass={indexMainClass}>
      <SEO title="Home" />
      <Header />

      <div className="home-wrapper">
        <div className="hero-text">
          <h1>
            <span className="blast">D</span>
            <span className="blast">a</span>
            <span className="blast">n</span>
          </h1>
          <h1>
            <span className="blast">B</span>
            <span className="blast">a</span>
            <span className="blast">m</span>
            <span className="blast">i</span>
            <span className="blast">k</span>
            <span className="blast">i</span>
            <span className="blast">y</span>
            <span className="blast">a</span>
          </h1>
        </div>
        <div className="image-wrapper">
          <div className="chat-bubble" style={{ willChange: "transform" }}>
            Hello, I'm a software engineer. Welcome to my portfolio{" "}
            <span role="img" aria-label="thumbs up">
              👍
            </span>
          </div>

          <div style={{ position: "relative", overflow: "hidden" }}>
            <div style={{ width: "100%", paddingBottom: "105.5%" }}>
              <Image
                name="front-image.svg"
                alt="an image of a man sitting"
                width="100%"
                height="100%"
                style={{
                  maxWidth: "380px",
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  objectFit: "cover",
                  objectPosition: "center center",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="home-nav"
        style={{ fontSize: "0.4rem", willChange: "transform" }}
        role="navigation"
      >
        <Icons />
      </div>
    </Layout>
  )
}

export default IndexPage
