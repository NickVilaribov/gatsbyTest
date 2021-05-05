import * as React from "react"
//import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "./catSection.sass"
// import apple from "../../images/apple.svg"
// import google from "../../images/google.svg"
// import app1 from "../../images/app1.svg"
// import app2 from "../../images/app2.svg"
// import app3 from "../../images/app3.svg"

const CatSection = () => (
	<section className="catalog-section section" id="catalog">
			<div className="catalog-section__container container-fluid">
				<div className="row">
					<div className="col-md-8 col-lg-6">
						<h3 className="catalog-section__title section__title">Зарядные станции Wallbox</h3>
						<p className="catalog-section__subtitle">Выберите зарядное устройство, соответствующее вашим потребностям.
							Управляйте зарядкой с помощью приложения MyWallbox или
							портала MyWallbox.</p>
					</div>
				</div>
				<div className="row catalog-section__item-wrapper">
					<div className="catalog-item col-sm-6">
						<a href="#">
							<div className="catalog-item__wrapper">
								<div className="catalog-item__image">
									<StaticImage
											className="img-fit"
											src="../../images/catalog1.jpg"
											alt="A dinosaur"
											placeholder="blurred"
										/>
								</div>
								<div className="catalog-item__text-part">
									<div className="top">
										<div className="name">Pulsar</div>
										<div className="price">от 3120 р.</div>
									</div>
									<div className="body">Идеальное решение для персональной зарядной станции</div>
									<div className="bottom">
										<div className="btn btn--small">подробнее</div>
									</div>
								</div>
							</div>
						</a>
					</div>
					<div className="catalog-item col-sm-6">
						<a href="#">
							<div className="catalog-item__wrapper">
								<div className="catalog-item__image">
									<StaticImage
											className="img-fit"
											src="../../images/catalog2.jpg"
											alt="A dinosaur"
											placeholder="blurred"
										/>
								</div>
								<div className="catalog-item__text-part">
									<div className="top">
										<div className="name">Pulsar Plus</div>
										<div className="price">от 3120 р.</div>
									</div>
									<div className="body">Продвинутое решение для персональной зарядной станции</div>
									<div className="bottom">
										<div className="btn btn--small">подробнее</div>
									</div>
								</div>
							</div>
						</a>
					</div>
					<div className="catalog-item col-sm-6">
						<a href="#">
							<div className="catalog-item__wrapper">
								<div className="catalog-item__image">
									<StaticImage
											className="img-fit"
											src="../../images/catalog3.jpg"
											alt="A dinosaur"
											placeholder="blurred"
										/>
								</div>
								<div className="catalog-item__text-part">
									<div className="top">
										<div className="name">Commander 2</div>
										<div className="price">от 3120 р.</div>
									</div>
									<div className="body">Лучшее многопользовательское решение</div>
									<div className="bottom">
										<div className="btn btn--small">подробнее</div>
									</div>
								</div>
							</div>
						</a>
					</div>
					<div className="catalog-item col-sm-6">
						<a href="#">
							<div className="catalog-item__wrapper">
								<div className="catalog-item__image">
									<StaticImage
											className="img-fit"
											src="../../images/catalog4.jpg"
											alt="A dinosaur"
											placeholder="blurred"
										/>
								</div>
								<div className="catalog-item__text-part">
									<div className="top">
										<div className="name">Cooper SB</div>
										<div className="price">от 3120 р.</div>
									</div>
									<div className="body">Популярное решение для бизнес клиентов</div>
									<div className="bottom">
										<div className="btn btn--small">подробнее</div>
									</div>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</section>
)

export default CatSection