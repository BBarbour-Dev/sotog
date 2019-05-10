import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const LatestPostLanding = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "posts" } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
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
  const latestPost = data.allMarkdownRemark.edges[0].node
  return (
    <div
      className="has-text-white-bis"
      style={{
        marginTop: "5vh",
        background: "rgba(1,1,1,0.50)",
      }}
    >
      <div className="columns is-centered">
        <div style={{ margin: "1rem" }} className="column is-two-fifths">
          <h2 className="is-size-4 is-uppercase has-text-weight-bold eagle slight-shade">
            Latest Updates
          </h2>
          <p style={{ marginTop: "1rem" }}>
            <strong className="has-text-success">
              <span className="is-size-5">{latestPost.frontmatter.title}</span>
            </strong>
          </p>
          <p className="has-text-justified">
            <span className="is-uppercase">{latestPost.frontmatter.date}</span>{" "}
            - {latestPost.excerpt}
          </p>
          <p className="has-text-right">
            <Link
              className="button is-success is-small"
              to={latestPost.fields.slug}
            >
              <strong>Continue Reading</strong>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LatestPostLanding