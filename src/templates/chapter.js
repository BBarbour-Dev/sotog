import React from "react"
import { graphql } from "gatsby"

const Chapter = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  console.log(frontmatter.images)
  return (
    <div>
      <h1>{frontmatter.title}</h1>
      {frontmatter.images.map(image => {
        return <img src={image} alt={image} style={{ height: "400px" }} />
      })}
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
        images
      }
    }
  }
`
export default Chapter
