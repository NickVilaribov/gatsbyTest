/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import MobileNav from "../mobileNavigation/mobileNavigation"
import Header from "../header/header"
import Footer from "../footer/footer"

//import "./layout.css"

const Layout = ({ children }) => {
  

  return (
    <>
      <div className="page-wrapper">
        <MobileNav />
        <Header/>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
