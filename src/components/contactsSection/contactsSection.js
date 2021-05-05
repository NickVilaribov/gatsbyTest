import * as React from "react"
//import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"

import "./contactsSection.sass"

const ContactsSection = () => (
	<section className="contacts-section" id="contacts">
			<div className="contacts-section__container container-fluid">
				<div className="row">
					<div className="col-sm-6 col-md-4 col-lg-5 contacts-section__column">
						<div className="contacts-section__title">Наши контакты</div>
						<a href="tel:">+375 (29) 106-44-22</a>
						<a href="mailto:">info@wallbox-ev.by</a>
					</div>
					<div className="col-sm-6 col-md-4 contacts-section__column">
						<div className="contacts-section__title">Время работы</div>
						<p>пн-пт. 10:00-18:00<br/>
							сб. 10:00-16:00</p>
					</div>
					<div className="col-sm-6 col-md-4 col-lg-3 contacts-section__column">
						<div className="contacts-section__title">Наш адрес</div>
						<p>г. Минск<br/>
							ул. Ленина, 27-80</p>
					</div>
				</div>
			</div>
		</section>
)

export default ContactsSection