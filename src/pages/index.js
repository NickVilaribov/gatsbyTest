import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout/layout"
import Slide from "../components/slide/slide"
import WhySection from "../components/whySection/whySection"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Slide />
    <WhySection />
    
    
  </Layout>
)

export default IndexPage
