import React from "react"

import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"
import HomeNav from "../ui/HomeNav"
import HomeMainSection from "../components/homeMainSection"

import "../scss/index.scss"

const IndexPage = () => {
  const indexMainClass = "index-main"

  return (
    <Layout mainClass={indexMainClass}>
      <SEO title="Home" />
      <Header />
      <HomeMainSection />
      <HomeNav />
    </Layout>
  )
}

export default IndexPage
