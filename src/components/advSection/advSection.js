import * as React from "react"
//import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "./advSection.sass"
import plus from "../../images/plus.svg"



const AdvSection = () => (
	<section className="adv-section section" id="advantages">
			<div className="adv-section__image">
				<StaticImage
					className="img-fit"
					src="../../images/adv-slide.jpg"
					alt="A dinosaur"
					placeholder="blurred"
				/>
			</div>
			<div className="adv-section__container container-fluid">
				<div className="row">
					<div className="col-sm-9 offset-sm-3 col-md-8 offset-md-4">
						<h3 className="adv-section__title section__title">Wallbox - идеальная зарядная станция! Почему?</h3>
						<div className="adv-section__wrapper row">
							<div className="adv-section__item col-sm-6">
								<div className="title">Простота и доступность</div>
								<div className="desc">Сделаны для людей и продуманы до мелочей. Можно использовать не читая
									инструкцию.</div>
							</div>
							<div className="adv-section__item col-sm-6">
								<div className="title">Умные функции</div>
								<div className="desc">Решите, как быстро и когда вы хотите заряжать автомобиль из мобильного
									приложения. Контролируйте затраты.</div>
							</div>
							<div className="adv-section__item col-sm-6">
								<div className="title">Совместимость</div>
								<div className="desc">Совместимы с любыми электросетями, разъёмами и типами батарей. Подойдут всем!
								</div>
							</div>
							<div className="adv-section__item col-sm-6">
								<div className="title">Быстрая зарядка</div>
								<div className="desc">Зарядка с Wallbox происходит намного быстрее, чем от обычной вилки.</div>
							</div>
							<div className="adv-section__item adv-section__item--alert col-12">
								<div className="icon">
									<img src={plus} alt="plus"/>
									</div>
								<div className="desc"><strong>Кстати!</strong> Зарядные станции Wallbox умеют
									<strong>распределять нагрузку на сеть. </strong> Вам не
									нужно беспокоится о перегрузках
									электросети. Wallbox снизит собственное потребление, если нагрузка на сеть превышает ее
									возможности.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
)

export default AdvSection