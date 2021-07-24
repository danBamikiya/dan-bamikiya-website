import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import AboutMainSection from "../components/aboutMainSection"

import "../scss/about.scss"

const AboutPage = () => {
  const styles = {
    nav: {
      display: "flex",
    },
  }

  return (
    <Layout>
      <SEO title="About" />
      <Header headerStyle={styles.nav} />
      <AboutMainSection />
    </Layout>
  )
}

export default AboutPage
