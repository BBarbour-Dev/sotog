import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import SEO from "../components/SEO"

export default ({ data }) => {
  // const chapters = data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title="Posts" />
      <section className="container" style={{ padding: "2rem" }}>
        <div className="columns is-multiline">
          {/* {chapters &&
            chapters.map(chapter => {
              return<ChapterBox chapter={chapter.node} key={chapter.node.id} />
             })} */}
        </div>
      </section>
    </Layout>
  )
}
