import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BeginningButton from "../components/BeginningButton"
import LatestPostLanding from "../components/LatestPostLanding"

export default () => {
  return (
    <Layout>
      <SEO title="Home" />
      <section className="hero is-fullheight-with-navbar hero-bg">
        <div className="hero-header" style={{ marginTop: "10vh" }}>
          <div className="container has-text-centered">
            <h1 className="is-size-1 eagle has-text-grey-lighter shade">
              Saga of the Old Gods
            </h1>
          </div>
          <div className="hero-body">
            <div className="container">
              <div style={{ marginTop: "10vh" }} className="has-text-centered">
                <BeginningButton />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-footer">
          <LatestPostLanding />
        </div>
      </section>
    </Layout>
  )
}
