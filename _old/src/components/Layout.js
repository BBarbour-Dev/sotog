import React from "react"

import Nav from "./Nav"
import Footer from "./Footer"
import "normalize.css/normalize.css"

const Layout = ({ children }) => {
  return (
    <div className="site">
      <Nav />
      <div className="site-content">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
