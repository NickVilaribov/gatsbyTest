import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "./companySection.sass"

const CompanySection = () => (
	<section class="company-section section" id="company">
			<div class="company-section__container container-fluid">
				<div class="row">
					<div class="col-md-8 col-lg-6 company-section__textpart">
						<h4 class="company-section__title section__title">Почему выбирают нас</h4>
						<p class="company-section__subtitle">Наша команда действительно считает зарядные станции Wallbox
							лучшими в мире. Мы ставим перед собой задачу сделать
							доступными современные решения для зарядки электромобилей.</p>
						<div class="company-section__item">
							<div class="name">Официальный дистрибьютор</div>
							<div class="text">Мы являемся торговым партнером Wallbox на территории Республики Беларусь</div>
						</div>
						<div class="company-section__item">
							<div class="name">Гарантия</div>
							<div class="text">Предоставляем официальную гарантию на зарядные станции - 2 года</div>
						</div>
						<div class="company-section__item">
							<div class="name">Монтаж “под ключ”</div>
							<div class="text">Проект, согласование и монтаж электростанций в одном месте</div>
						</div>
						<div class="company-section__item">
							<div class="name">Техническое обслуживание</div>
							<div class="text">Обеспечиваем техническое обслуживание зарядных станций по стандартам
								производителя</div>
						</div>
					</div>
					<div class="col-md-4 col-lg-5 offset-lg-1 company-section__imagepart">
						<div class="company-section__image">
							<StaticImage
								className="img-fit"
								src="../../images/company.jpg"
								alt="A dinosaur"
								placeholder="blurred"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
)

export default CompanySection