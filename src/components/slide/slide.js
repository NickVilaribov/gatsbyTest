import * as React from "react"
//import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "./slide.sass"



const Slide = () => (
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
							<form method="POST" id="first-form" className="form" data-netlify="true">
								<div className="form__success">
									<span className="message">Thank you for request submition!</span>
								</div>
								<div className="form__error"><span className="message">Something went wrong. Try it later.
									</span>
								</div>
								<div className="form__item">
									<input type="text" name="name" placeholder="Ваше имя" required/>
									<label for="name">Ваше имя</label>
								</div>
								<div className="form__item">
									<input type="phone" name="phone" className="phone-masked" placeholder="Телефон" required/>
									<label for="email">Телефон</label>
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

export default Slide