import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "./partnersSection.sass"

const PartnersSection = () => (
	<section class="partners-section" id="partners">
			<div class="partners-section__container container-fluid">
				<div class="row">
					<div class="col-md-4 d-none d-md-block">
						<div class="partners-section__image">
							<StaticImage
								className="img-fit"
								src="../../images/partners.jpg"
								alt="A dinosaur"
								placeholder="blurred"
							/>
						</div>
					</div>
					<div class="col-md-8 partners-section__textpart">
						<h4 class="partners-section__title">Понравился Wallbox? Станьте нашим партнером!</h4>
						<p class="partners-section__subtitle">Приглашаем к сотрудничеству на выгодных условиях владельцев
							магазинов и интеренет площадок, желающих продавать продукцию
							Wallbox.</p>
						<div class="partners-section__btn">
							<div class="btn btn--accent m-open" data-modal="modal-callback">Стать партнером</div>
						</div>

					</div>
				</div>
			</div>
		</section>
)

export default PartnersSection