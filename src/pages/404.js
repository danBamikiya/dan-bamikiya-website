import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "../css/404.min.css"

const notFoundStyleHeight = {
  height: "100vh",
}

const notFoundStyleBackground = {
  backgroundColor: "#1d3557",
}

const NotFoundPage = () => (
  <Layout
    mainStyle={notFoundStyleHeight}
    notFoundStyle={notFoundStyleBackground}
  >
    <SEO title="404: Not found" />
    <h1 className="not-found-h1">
      <span className="blast">404</span>: <span className="blast">Not</span>{" "}
      <span className="blast">Found</span>
    </h1>
    <p style={{ textAlign: "center" }}>
      You just hit a route that doesn&#39;t exist... the sadness.
    </p>
    <Link to="/" className="not-found-home-link">
      Go back
    </Link>
  </Layout>
)

export default NotFoundPage
