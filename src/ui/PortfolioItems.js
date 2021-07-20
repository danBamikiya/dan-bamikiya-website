import React from "react"
import PortfolioItem from "./PortfolioItem"
import PortfolioItemContainer from "./PortfolioItemContainer"

import projects from "../fixtures/projects.json"

const PortfolioItems = () => (
  <>
    {projects.map(project => (
      <PortfolioItemContainer>
        <PortfolioItem project={project} />
      </PortfolioItemContainer>
    ))}
  </>
)

export default PortfolioItems
