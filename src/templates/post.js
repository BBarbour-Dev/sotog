import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Link, graphql } from "gatsby"
import { FaLongArrowAltLeft } from "react-icons/fa"
import NextPrevButtons from "../components/NextPrevButtons"
import PostThumbnail from "../components/PostThumbnail"

const Post = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html, id } = markdownRemark
  return (
    <Layout>
      <SEO title={`${frontmatter.title} • Posts `} />
      <div className="container">
        <Link
          to="/posts"
          className="button is-success is-small is-hidden-mobile"
          style={{ margin: "1.5rem 0 2rem 0" }}
        >
          <FaLongArrowAltLeft style={{ marginRight: ".5rem" }} /> Back to Posts
        </Link>
        <div className="columns is-mobile">
          <div
            className="column box content-gap"
            style={{ marginBottom: "1rem", background: "#F5F5F5" }}
          >
            <div className="content-header has-text-white-bis is-hidden-mobile">
              <h1 className="is-size-3 has-text-weight-bold">
                {frontmatter.title}
              </h1>
            </div>
            <h1
              className="is-size-3 has-text-weight-bold is-hidden-tablet"
              style={{ marginTop: "1rem" }}
            >
              {frontmatter.title}
            </h1>
            <h2
              className="is-size-5 is-uppercase has-text-weight-semibold"
              style={{ marginTop: "2rem", marginBottom: "1rem" }}
            >
              {frontmatter.date}
            </h2>
            {frontmatter.thumbnail ? (
              <PostThumbnail
                thumbnail={frontmatter.thumbnail}
                maxHeight="50vh"
              />
            ) : (
              <hr />
            )}
            <div
              className="content is-medium has-text-dark-grey has-text-justified"
              style={{ marginTop: "1rem" }}
            >
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
            <hr />
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
      }
      html
    }
  }
`

export default Post
