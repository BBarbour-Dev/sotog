import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import PostBox from "../components/PostBox"

export default ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title="Posts" />
      <section className="container">
        <div className="columns is-centered">
          <div className="column is-four-fifths" style={{ margin: "2rem" }}>
            <h1
              className="is-size-3 has-text-grey-dark is-uppercase has-text-weight-bold eagle"
              style={{ marginBottom: "2rem" }}
            >
              Posts
            </h1>
            {posts.map(post => {
              return <PostBox post={post.node} key={post.node.id} />
            })}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
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
`
