import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

export default () => {
  return (
    <Layout>
      <SEO title="About" />
      <div className="container">
        <div className="columns is-mobile">
          <div className="column content-gap">
            <div className="box" style={{ background: "#F5F5F5" }}>
              <div className="content-header has-text-white-bis is-hidden-mobile">
                <h1 className="is-size-3 has-text-weight-bold">About</h1>
              </div>
              <h1
                className="is-size-3 has-text-weight-bold is-hidden-tablet"
                style={{ marginTop: "1rem" }}
              >
                About
              </h1>
              <div
                className="content is-medium has-text-dark-grey has-text-justified"
                style={{ marginTop: "1rem" }}
              >
                {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
