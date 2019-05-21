import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Link, graphql } from "gatsby"
import { FaLongArrowAltLeft } from "react-icons/fa"
import PageViewer from "../components/PageViewer"
import NextChapterButton from "../components/NextChapterButton"

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
          className="button is-success is-small is-outlined"
          style={{ marginTop: "1.25rem", marginBottom: "1.25rem" }}
        >
          <FaLongArrowAltLeft style={{ marginRight: ".5rem" }} /> Back to
          Chapter List
        </Link>
        <p
          className="hide-on-touch has-text-centered"
          style={{ textDecoration: "underline", marginBottom: "1rem" }}
        >
          Click edge of page to move forward/backward.
        </p>
        <p
          className="hide-on-mouse has-text-centered"
          style={{ textDecoration: "underline", marginBottom: "1rem" }}
        >
          Swipe left or right to move forward/backward.
        </p>
        <div className="columns is-centered">
          <div className="column is-four-fifths has-text-centered">
            <PageViewer chapterImages={chapterImages} />
            <NextChapterButton chapterId={markdownRemark.id} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
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
