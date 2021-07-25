import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import PortfolioMainSection from "../components/portfolioMainSection"

import "../scss/portfolio.scss"

const PortfolioPage = () => {
  const styles = {
    main: {
      height: "100%",
      overflow: "hidden",
      width: "93%",
    },
    nav: {
      display: "flex",
    },
  }

  return (
    <Layout mainStyle={styles.main}>
      <SEO title="Portfolio" />
      <Header headerStyle={styles.nav} />
      <PortfolioMainSection />
    </Layout>
  )
}

export default PortfolioPage
