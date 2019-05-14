import React from "react"
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer footer-bg">
      <div className="has-text-centered" style={{ fontSize: "2rem" }}>
        <a
          href="https://www.facebook.com/kjsylva/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare />
        </a>
        <a
          href="https://www.instagram.com/kjsylvaart/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://twitter.com/KjSylva"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitterSquare />
        </a>
        <p className="is-size-7 has-text-grey">
          © {new Date().getFullYear()}, KJ Sylva
        </p>
      </div>
    </div>
  )
}

export default Footer
