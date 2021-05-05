import * as React from "react"
import { Swiper, SwiperSlide } from 'swiper/react'
//import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import '../../../node_modules/swiper/swiper.min.css'
import "./whySection.sass"



const WhySection = () => {
	return (
	<section class="why-section section" id="why">
			<div class="why-section__container container-fluid">
				<div class="row">
					<div class="col-md-8 col-lg-5">
						<h2 class="why-section__title section__title">Зачем нужна персональная зарядная станция?</h2>
					</div>
				</div>
			</div>
			<div class="why-section__slider slider swiper-container">
				<Swiper
					className="swiper-wrapper"
					spaceBetween={32}
					loop={false}
					breakpoints={{
						769: {
							slidesPerView: 2,
							spaceBetween: 0,
							simulateTouch: false
						},
					}}
				>
					<SwiperSlide className="slider-item">
							<div class="slider-item__wrapper">
								<div class="top">
									<div class="top__image">
										<StaticImage
											className="img-resp"
											src="../../images/why1.png"
											alt="A dinosaur"
											placeholder="blurred"
										/>
									</div>
									<div class="top__text">Зарядная станция Wallbox</div>
								</div>
								<div class="text-item"><strong>Экономит 50%.</strong> Стоимось электроэнергии для персональных
									зарядных станций в два раза меньше
								</div>
								<div class="text-item"><strong>Доступная.</strong> Зарядная станция которая всегда свободна и ждёт
									ваш электромобиль
								</div>
								<div class="text-item"><strong>Совместима со всеми</strong> электрокарами и гибридами. Не важно для
									какого рынка выпущен ваш элемобиль. Wallbox подойдет!
								</div>
							</div>
					</SwiperSlide>
					<SwiperSlide className="slider-item slider-item--second">
							<div class="slider-item__wrapper">
								<div class="top">
									<div class="top__image">
										<StaticImage
											className="img-resp"
											src="../../images/why2.png"
											alt="A dinosaur"
											placeholder="blurred"
										/>
									</div>
									<div class="top__text">Общественная зарядная станция</div>
								</div>
								<div class="text-item">Стоимость 1 кВт электроэнергии на общественной станции будет постоянно
									повышаться
								</div>
								<div class="text-item">Часто занята другим электромобилем или вообще заблокирована обычным
									транспортом
								</div>
								<div class="text-item">Общественные станции расчитаны на европейский стандарт. Если ваш электрокар
									приехал из США вы не сможете заряжатся.
								</div>
							</div>
					</SwiperSlide>
				</Swiper>
			</div>
			<div class="container-fluid">
				<div class="why-section__btn btn btn--accent m-open" data-modal="modal-callback">Заказать Wallbox</div>
			</div>
		</section>
	)
}
		


export default WhySection