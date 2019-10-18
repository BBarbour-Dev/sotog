import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

export default () => {
  return (
    <Layout>
      <SEO title="contact" />
      <div className="container">
        <div className="columns is-mobile">
          <div className="column content-gap">
            <div
              className="box"
              style={{ background: "#F5F5F5", borderRadius: "0" }}
            >
              <div className="content-header has-text-white-bis is-hidden-mobile">
                <h1 className="is-size-3 has-text-weight-bold is-uppercase">
                  Contact
                </h1>
              </div>
              <div className="columns is-centered">
                <div
                  className="column is-three-fifths"
                  style={{ marginTop: "2rem" }}
                >
                  <form
                    name="contact"
                    method="post"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    action="/submitted/"
                    style={{ marginBottom: "4rem" }}
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="field">
                      <div className="control">
                        <label htmlFor="name" className="is-uppercase">
                          Name
                        </label>
                        <input
                          type="text"
                          className="input"
                          name="name"
                          required
                        />
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <label htmlFor="email" className="is-uppercase">
                          Email
                        </label>
                        <input
                          type="email"
                          className="input"
                          name="email"
                          required
                        />
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <label htmlFor="name" className="is-uppercase">
                          Message
                        </label>
                        <textarea
                          type="text"
                          className="textarea"
                          name="message"
                          required
                        />
                      </div>
                    </div>
                    <input
                      type="submit"
                      className="button is-success is-fullwidth is-outlined"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
