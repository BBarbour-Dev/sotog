import React from "react"
import Img from "gatsby-image"

const PostFeatured = ({ featured, alt }) => {
  const { childImageSharp, image } = featured

  if (!!image && !!image.childImageSharp) {
    return <Img fluid={image.childImageSharp.fluid} alt={alt} />
  }

  if (!!childImageSharp) {
    return <Img fluid={childImageSharp.fluid} alt={alt} />
  }

  if (!!image && typeof image === "string") return <img src="image" alt={alt} />

  return null
}

export default PostFeatured
