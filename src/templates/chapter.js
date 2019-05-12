import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Link, graphql } from "gatsby"
import { FaLongArrowAltLeft } from "react-icons/fa"
import PageViewer from "../components/PageViewer"

const Chapter = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  const chapterImages = [...frontmatter.cover, ...frontmatter.images]
  return (
    <Layout>
      <SEO title={`${frontmatter.title} • Chapters `} />
      <div className="container">
        <Link
          to="/chapters"
          className="button is-success is-small"
          style={{ marginTop: "1.25rem", marginBottom: "1.25rem" }}
        >
          <FaLongArrowAltLeft style={{ marginRight: ".5rem" }} /> Back to
          Chapters
        </Link>
        <div className="columns is-centered">
          <div className="column has-text-centered">
            <p>
              <strong>Desktop:</strong> Click edge to change page.{" "}
              <strong>Mobile/Touch:</strong> Swipe left or right to change page.
            </p>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column content-gap">
            <PageViewer chapterImages={chapterImages} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        cover {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        images {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Chapter
