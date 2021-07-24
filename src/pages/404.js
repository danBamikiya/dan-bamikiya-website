import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import LINKS from "../utils/constants/links"
import "../scss/404.scss"

const NotFoundPage = () => {
  const styles = {
    main: {
      height: "100vh",
    },
  }

  return (
    <Layout mainStyle={styles.main}>
      <SEO title="404: Not found" />
      <h1 className="not-found-h1">
        <span className="blast">404</span>: <span className="blast">Not</span>{" "}
        <span className="blast">Found</span>
      </h1>
      <p style={{ textAlign: "center" }}>
        You just hit a route that doesn&#39;t exist... the sadness.
      </p>
      <Link to={LINKS.HOME} className="not-found-home-link">
        Go back
      </Link>
    </Layout>
  )
}

export default NotFoundPage
