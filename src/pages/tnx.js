import * as React from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"


const Tnx = () => {
  return (
    <Layout>
      <Seo title="Спасибо" />
      <div className="container-fluid" style={{marginTop: "4rem", marginBottom: "4rem"}}>
        <h1>Спасибо! В ближайшее время мы свяжемся с вами! </h1>
        <Link to="/" className="btn">Вернуться на главную</Link>
      </div>
    </Layout>
  )
}
export default Tnx
