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
  {
    markdownRemark {
      id
      fileAbsolutePath
      frontmatter {
        title
        images
      }
    }
  }
`
export default Chapter
