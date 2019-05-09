import React, { useState } from "react"
import { Link } from "gatsby"

const Nav = () => {
  const [burgerOpen, setBurgerOpen] = useState(false)
  const burgerActive = burgerOpen ? "is-active" : ""
  return (
    <nav className="navbar is-link no-radius">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item eagle slight-shade" to="/">
            Saga of the Old Gods
          </Link>
          <div
            className={`navbar-burger burger ${burgerActive}`}
            onClick={() => setBurgerOpen(!burgerOpen)}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className={`navbar-menu ${burgerActive}`}>
          <Link className="navbar-item" to="/posts">
            Posts
          </Link>
          <Link className="navbar-item" to="/chapters">
            Chapters
          </Link>
          <a
            className="navbar-item"
            href="http://www.indyplanet.us/comics/171695"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Prints
          </a>
          <Link className="navbar-item" to="/about">
            About
          </Link>
          <Link className="navbar-item" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav
