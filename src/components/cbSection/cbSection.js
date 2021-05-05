import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "./cbSection.sass"
import decor from "../../images/ev-decor.svg"




const CbSection = () => (
	<section className="callback-section">
			<div className="callback-section__image">
				<img src={decor} alt="wallbox-ev"/>
			</div>
			<div className="callback-section__container container-fluid">
				<div className="row d-flex justify-content-center">
					<div className="col-sm-10 col-lg-8">
						<h4 className="callback-section__title">Не знаете что выбрать? Подберём Wallbox для вашего автомобиля!
						</h4>
						<form action="post" id="callback-form" className="form">
							<div className="form__success">
								<span className="message">Thank you for request submition!</span>
							</div>
							<div className="form__error"><span className="message">Something went wrong. Try it later.
								</span>
							</div>
							<div className="form__item form__item--first">
								<input type="text" name="car" placeholder="Tesla Model S EU" required/>
								<label for="car">Модель электромобиля</label>
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
									Подобрать
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
	</section>
)

export default CbSection