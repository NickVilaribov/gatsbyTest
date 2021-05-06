import React, { useState } from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"


const Page2 = () => {
  const [formState, setFormState] = useState({
		name: "",
		phone: ""
	})
	const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }
	const handleChange = e => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value
		})
	}
	const handleSubmit = e => {
		fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "submitForm", ...formState })
      })
        .then(() => alert("Success!"))
        .catch(error => alert(error));

      e.preventDefault(); 
	}
  return (
    <Layout>
      <Seo title="About" />
      <div className="container-fluid" style={{marginTop: "4rem", marginBottom: "4rem"}}>
        <form onSubmit={handleSubmit} method="post" name="submitForm" className="form" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="submitForm" />
          <input 
            type="text"
            name="name"
            onChange={handleChange}
            value={formState.name}	
            placeholder="Ваше имя" required
          />
          <label htmlFor="name">Ваше имя</label>
          <input 
            type="phone" 
            name="phone"
            onChange={handleChange}
            value={formState.phone} 
            className="phone-masked" 
            placeholder="Телефон" 
            required
          />
          <label htmlFor="email">Телефон</label>
          <button type="submit" className="btn btn--form">
            Связаться
          </button>
        </form>
      </div>
    </Layout>
  )
}
export default Page2
