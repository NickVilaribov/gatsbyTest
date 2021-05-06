import React, { useState } from "react"
//import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "./slide.sass"



const Slide = () => {
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
	<section className="first-slide">
			<div className="first-slide__image">
				<StaticImage
					className="img-fit"
					src="../../images/first-slide.jpg"
					alt="A dinosaur"
					placeholder="blurred"
				/>
			</div>
			<div className="first-slide__container container-fluid">
				<div className="row">
					<div className="col-md-8 col-lg-6">
						<div className="first-slide__title-part">
							<h1 className="first-slide__title">
								Зарядные станции Wallbox для любых электромобилей
							</h1>
							<div className="first-slide__distr">
								<div className="number">#1</div>
								<div className="text">Официальный дистрибьютор Wallbox(Испания)
									в Республике Беларусь</div>
							</div>
						</div>
						<div className="first-slide__form-wrapper">
							<div className="title">Нужна идеальная зарядная станция? Мы поможем!</div>
							<form onSubmit={handleSubmit} method="post" name ="submitForm" className="form" data-netlify="true" data-netlify-honeypot="bot-field">
								<div className="form__success">
									<span className="message">Thank you for request submition!</span>
								</div>
								<div className="form__error"><span className="message">Something went wrong. Try it later.
									</span>
								</div>
								<div className="form__item">
									<input type="hidden" name="form-name" value="submitForm" />
									<input 
										type="text"
										name="name"
										onChange={handleChange}
										value={formState.name}	
										placeholder="Ваше имя" required
									/>
									<label htmlFor="name">Ваше имя</label>
								</div>
								<div className="form__item">
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
								</div>
								<div className="btn_wrapper">
									<button type="submit" className="btn btn--form">
										Связаться
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>	
	)
}

export default Slide