import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Link, graphql } from "gatsby"
import { FaArrowAltCircleLeft } from "react-icons/fa"
import NextPrevButtons from "../components/NextPrevButtons"

const Post = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html, id } = markdownRemark
  const thumbnail = frontmatter.thumbnail
  return (
    <Layout>
      <SEO title={`${frontmatter.title} • Posts `} />
      <div className="container">
        <div className="columns">
          <div className="column box content-gap">
            <div className="content-header has-text-white-bis is-hidden-mobile">
              <h1 className="is-size-3 has-text-weight-bold">
                {frontmatter.title}
              </h1>
            </div>
            <Link
              to="/posts"
              className="button is-success is-small"
              style={{ margin: "1.5rem 0 .5rem 0" }}
            >
              <FaArrowAltCircleLeft style={{ marginRight: ".5rem" }} /> Back to
              Posts
            </Link>
            <h1 className="is-size-3 has-text-weight-bold is-hidden-tablet">
              {frontmatter.title}
            </h1>
            <h2
              className="is-size-5 is-uppercase has-text-weight-semibold"
              style={{ margin: "1rem 0 1rem 0" }}
            >
              {frontmatter.date}
            </h2>
            <div className="content is-medium has-text-dark-grey">
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
            <NextPrevButtons id={id} />
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
      fileAbsolutePath
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        thumbnail
      }
      html
    }
  }
`

export default Post
