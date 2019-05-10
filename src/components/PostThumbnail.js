import React from "react"
import Img from "gatsby-image"

const PostThumbnail = ({ thumbnail, maxWidth, maxHeight }) => {
  console.log(thumbnail.fluid)
  return (
    <Img
      fluid={thumbnail.childImageSharp.fluid}
      style={{
        maxHeight: maxHeight,
      }}
    />
  )
}

export default PostThumbnail
