import React from "react"

import HomeHeroText from "../ui/HomeHeroText"
import ChatBubble from "../ui/ChatBubble"
import HomeImage from "../ui/HomeImage"

const HomeMainSection = () => (
  <div className="home-wrapper">
    <HomeHeroText />
    <div className="image-wrapper">
      <ChatBubble />
      <HomeImage />
    </div>
  </div>
)

export default HomeMainSection
