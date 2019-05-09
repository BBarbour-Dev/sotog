import React from "react"
import { Link, useStaticQuery } from "gatsby"

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
  const currentPost = data.allMarkdownRemark.edges.findIndex(edge => {
    return edge.node.id === id
  })
  const nextPost = currentPost === 0 ? null : posts[currentPost - 1]
  const previousPost =
    currentPost === posts.length - 1 ? null : posts[currentPost + 1]
  return (
    <div className="columns is-centered is-mobile">
      <div className="column is-one-fifth" style={{ marginBottom: "2rem" }}>
        <Link
          disabled={!previousPost}
          className="button is-success is-small has-text-left"
          to={previousPost ? previousPost.node.fields.slug : "/posts"}
        >
          Previous Post
        </Link>
      </div>
      <div className="column is-one-fifth has-text-right">
        <Link
          disabled={!nextPost}
          className="button is-success is-small has-text-left"
          to={nextPost ? nextPost.node.fields.slug : "/posts"}
        >
          Next Post
        </Link>
      </div>
    </div>
  )
}

export default NextPrevButtons
