import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import Slide from "../components/slide/slide"
import WhySection from "../components/whySection/whySection"
import AdvSection from "../components/advSection/advSection"
import AppSection from "../components/appSection/appSection"
import CatSection from "../components/catSection/catSection"
import CbSection from "../components/cbSection/cbSection"
import CompanySection from "../components/companySection/companySection"
import PartnersSection from "../components/partnersSection/partnersSection"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Slide />
    <WhySection />
    <AdvSection />
    <AppSection />
    <CatSection />
    <CbSection />
    <CompanySection />
    <PartnersSection />
    
  </Layout>
)

export default IndexPage
