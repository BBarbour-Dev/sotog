import React, { useState } from "react"
import { FaArrowRight } from "react-icons/fa"
import { FaArrowLeft } from "react-icons/fa"
import Img from "gatsby-image"

const PageViewer = ({ chapterImages }) => {
  const [currentPage, setCurrentPage] = useState(0)
  const nextPage = () => {
    if (currentPage < chapterImages.length - 1) {
      return setCurrentPage(currentPage + 1)
    }
    return null
  }
  const previousPage = () => {
    if (currentPage > 0) {
      return setCurrentPage(currentPage - 1)
    }
    return null
  }
  return (
    <div className="has-text-centered" style={{ position: "relative" }}>
      <div className="slider is-hidden-desktop">
        {chapterImages.map((image, index) => {
          return (
            <div className="slide" style={{ zIndex: "1" }}>
              <Img
                fluid={image.childImageSharp.fluid}
                alt={`Page: ${index === 0 ? "Cover" : index}`}
                style={{ width: "100%" }}
              />
            </div>
          )
        })}
      </div>
      <div className="is-hidden-touch" style={{ position: "relative" }}>
        <div className="next-page" onClick={nextPage}>
          <span className="has-text-white">
            <FaArrowRight />
          </span>
        </div>
        <div className="previous-page" onClick={previousPage}>
          <span className="has-text-white">
            <FaArrowLeft />
          </span>
        </div>
        <Img
          fluid={chapterImages[currentPage].childImageSharp.fluid}
          alt={`Page ${currentPage + 1}`}
          style={{ width: "100%" }}
        />
      </div>
    </div>
  )
}

export default PageViewer
