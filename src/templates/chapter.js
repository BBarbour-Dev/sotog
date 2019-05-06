import React from "react"
import { graphql } from "gatsby"

const Chapter = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  return (
    <div>
      <h1>{frontmatter.title}</h1>
    </div>
  )
}

export const chapterQuery = graphql`
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
export default Chapter
