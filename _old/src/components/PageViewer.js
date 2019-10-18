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
  return chapterImages ? (
    <div
      className="has-text-centered"
      style={{ position: "relative", marginBottom: "2rem" }}
    >
      <div className="slider hide-on-mouse">
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
      <div className="hide-on-touch" style={{ position: "relative" }}>
        <button className="next-page" onClick={nextPage}>
          <span className="has-text-white">
            <FaArrowRight />
          </span>
        </button>
        <button className="previous-page" onClick={previousPage}>
          <span className="has-text-white">
            <FaArrowLeft />
          </span>
        </button>
        <Img
          fluid={chapterImages[currentPage].childImageSharp.fluid}
          alt={`Page ${currentPage + 1}`}
          style={{ width: "100%" }}
        />
      </div>
    </div>
  ) : null
}

export default PageViewer
