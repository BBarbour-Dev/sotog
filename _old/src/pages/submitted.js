import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { FaLongArrowAltLeft } from "react-icons/fa"
import { Link } from "gatsby"

export default () => {
  return (
    <Layout>
      <SEO title="contact" />
      <div className="container">
        <div className="columns is-mobile">
          <div className="column content-gap">
            <div className="box" style={{ background: "#F5F5F5" }}>
              <div className="content-header has-text-white-bis is-hidden-mobile">
                <h1 className="is-size-3 has-text-weight-bold">Contact</h1>
              </div>
              <div className="columns is-centered">
                <div
                  className="column is-three-fifths"
                  style={{ marginTop: "2rem" }}
                >
                  <div className="message">
                    <div className="message-body">
                      Thank you for contacting Saga of the Old Gods. The author
                      will follow up with you at your email address as soon as
                      possible.
                    </div>
                  </div>
                  <div className="has-text-centered">
                    <Link to="/contact" className="button is-success">
                      <FaLongArrowAltLeft style={{ marginRight: ".5rem" }} />
                      Back
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
