import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { FaAutoprefixer } from "react-icons/fa"

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
        <div style={{ margin: "1rem" }} className="column is-three-fifths">
          <h2 className="is-size-4 is-uppercase has-text-weight-bold">
            Lastest Post
          </h2>
          <p style={{ marginTop: "1rem" }}>
            <strong className="has-text-white-bis">
              <span className="is-size-5">{latestPost.frontmatter.title}</span>
            </strong>{" "}
            - {latestPost.frontmatter.date}
          </p>
          <p>
            {latestPost.excerpt}{" "}
            <Link className="has-text-success" to={latestPost.fields.slug}>
              <strong>Read Post</strong>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LatestPostLanding
