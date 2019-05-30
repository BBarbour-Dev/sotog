import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const NextChapterButton = ({ chapterId }) => {
  const data = useStaticQuery(graphql`
    query {
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
          }
        }
      }
    }
  `)
  const chapters = data.allMarkdownRemark.edges
  const currentChapter = chapters.findIndex(chapter => {
    return chapter.node.id === chapterId
  })
  const nextChapter =
    chapters.length - 1 < currentChapter ? null : chapters[currentChapter + 1]
  console.log(chapters.length - 1, currentChapter, chapterId)
  return nextChapter ? (
    <>
      <hr />
      <Link
        to={nextChapter.node.fields.slug}
        className="button is-success is-outlined"
        style={{ marginBottom: "2rem" }}
      >
        Next Chapter
      </Link>
    </>
  ) : null
}

export default NextChapterButton
