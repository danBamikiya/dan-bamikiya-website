import React from "react"

import Image from "../components/image"

const HomeImage = () => (
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
)

export default HomeImage
