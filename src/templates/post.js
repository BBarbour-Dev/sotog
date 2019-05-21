import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Link, graphql } from "gatsby"
import { FaLongArrowAltLeft } from "react-icons/fa"
import NextPrevButtons from "../components/NextPrevButtons"
import PostFeatured from "../components/PostFeatured"

const Post = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html, id } = markdownRemark
  return (
    <Layout>
      <SEO title={`${frontmatter.title} • Posts `} />
      <div className="container">
        <Link
          to="/posts"
          className="button is-success is-small is-hidden-mobile is-outlined"
          style={{ marginTop: "1.25rem" }}
        >
          <FaLongArrowAltLeft style={{ marginRight: ".5rem" }} /> Back to Posts
        </Link>
        <div className="columns is-mobile">
          <div className="column content-gap">
            <div className="box" style={{ background: "#F5F5F5" }}>
              <div className="content-header has-text-white-bis is-hidden-mobile">
                <h1 className="is-size-3 has-text-weight-bold">
                  {frontmatter.title}
                </h1>
              </div>
              <Link
                to="/posts"
                className="button is-success is-small is-hidden-tablet"
                style={{ marginTop: "1.25rem", marginBottom: "1.25rem" }}
              >
                <FaLongArrowAltLeft style={{ marginRight: ".5rem" }} /> Back to
                Posts
              </Link>
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
              {frontmatter.featured ? (
                <PostFeatured
                  featured={frontmatter.featured}
                  alt={frontmatter.title}
                />
              ) : null}
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
        featured {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`

export default Post
