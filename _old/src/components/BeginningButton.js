import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const BeginningButton = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "chapters" } } }
        sort: { fields: [frontmatter___date], order: ASC }
      ) {
        edges {
          node {
            fields {
              slug
            }
            fileAbsolutePath
            frontmatter {
              date
              type
            }
          }
        }
      }
    }
  `)
  const chapterOneURL = data.allMarkdownRemark.edges[0].node.fields.slug
  return (
    <Link
      className="button is-success action-btn is-rounded"
      to={chapterOneURL}
    >
      <strong>Start at the Beginning</strong>
    </Link>
  )
}

export default BeginningButton
