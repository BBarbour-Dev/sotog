import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ description, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )
  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet>
      <title>
        {title} • {site.siteMetadata.title}{" "}
      </title>
      <meta name="description" content={metaDescription} />
    </Helmet>
  )
}

export default SEO
