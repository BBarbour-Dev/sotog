import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import ChapterCard from "../components/ChapterCard"

export default ({ data }) => {
  const chapters = data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title="Posts" />
      <section className="container" style={{ padding: "2rem" }}>
        <div
          className={`columns ${
            chapters.length === 1 ? "is-centered" : "is-multiline"
          }`}
        >
          {chapters &&
            chapters.map(chapter => {
              return (
                <ChapterCard chapter={chapter.node} key={chapter.node.id} />
              )
            })}
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "chapters" } } }
      sort: { fields: [frontmatter___date], order: ASC }
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
            description
            pdf {
              relativePath
            }
            images
            cover {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
