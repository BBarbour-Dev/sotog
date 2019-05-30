import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { FaArrowAltCircleLeft } from "react-icons/fa"
import { FaArrowAltCircleRight } from "react-icons/fa"

const NextPrevButtons = ({ id }) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "posts" } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
            }
            excerpt
          }
        }
      }
    }
  `)
  const posts = data.allMarkdownRemark.edges
  const currentPost = posts.findIndex(post => {
    return post.node.id === id
  })
  const nextPost = currentPost === 0 ? null : posts[currentPost - 1]
  const previousPost =
    currentPost === posts.length - 1 ? null : posts[currentPost + 1]
  const disabledPrevious = previousPost ? "" : "disabled-link"
  const disabledNext = nextPost ? "" : "disabled-link"
  return (
    <div
      className="columns is-centered is-mobile"
      style={{ marginBottom: "1rem", marginTop: "1rem" }}
    >
      <div className="column is-two-fifths">
        <Link
          disabled={!previousPost}
          className={`button is-success is-outlined has-text-left ${disabledPrevious}`}
          to={previousPost ? previousPost.node.fields.slug : "/"}
        >
          <FaArrowAltCircleLeft />{" "}
          <span style={{ marginLeft: ".5rem" }}> Previous Post</span>
        </Link>
      </div>
      <div className="column is-two-fifths has-text-right">
        <Link
          disabled={!nextPost}
          className={`button is-success is-outlined has-text-left ${disabledNext}`}
          to={nextPost ? nextPost.node.fields.slug : "/"}
        >
          <span style={{ marginRight: ".5rem" }}>Next Post</span>
          <FaArrowAltCircleRight />
        </Link>
      </div>
    </div>
  )
}

export default NextPrevButtons
