import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import PortfolioMainSection from "../components/portfolioMainSection"

import "../scss/portfolio.scss"

const PortfolioPage = () => {
  const styles = {
    mainStyle: {
      height: "100%",
      overflow: "hidden",
      width: "93%",
    },
    navStyle: {
      display: "flex",
    },
  }

  return (
    <Layout mainStyle={styles.mainStyle}>
      <SEO title="Portfolio" />
      <Header headerStyle={styles.navStyle} />
      <PortfolioMainSection />
    </Layout>
  )
}

export default PortfolioPage
