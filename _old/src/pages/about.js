import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { graphql } from "gatsby"

export default ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  console.log(frontmatter)
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div className="container">
        <div className="columns is-mobile">
          <div className="column content-gap">
            <div
              className="box"
              style={{ background: "#F5F5F5", borderRadius: "0" }}
            >
              <div className="content-header has-text-white-bis is-hidden-mobile">
                <h1 className="is-size-3 has-text-weight-bold is-uppercase">
                  {frontmatter.title}
                </h1>
              </div>
              <h1
                className="is-size-2 has-text-weight-bold is-hidden-tablet"
                style={{ marginTop: "1rem" }}
              >
                {frontmatter.title}
              </h1>
              <div
                className="content is-medium has-text-dark-grey has-text-justified"
                style={{ marginTop: "3rem" }}
              >
                <div
                  dangerouslySetInnerHTML={{ __html: html }}
                  style={{ marginBottom: "4rem" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    markdownRemark(fields: { slug: { eq: "/pages/about/" } }) {
      frontmatter {
        title
      }
      html
    }
  }
`
