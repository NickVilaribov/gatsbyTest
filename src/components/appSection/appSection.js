import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "./appSection.sass"
import apple from "../../images/apple.svg"
import google from "../../images/google.svg"
import app1 from "../../images/app1.svg"
import app2 from "../../images/app2.svg"
import app3 from "../../images/app3.svg"

const AppSection = () => (
	<section className="app-section section" id="app">
			<div className="app-section__container container-fluid">
				<div className="row">
					<div className="col-lg-6">
						<h3 className="app-section__title section__title">myWallbox - удаленный контроль
							за процессом зарядки</h3>
						<ul className="app-section__list">
							<li>Следите за состоянием зарядного устройства и управляйте им удаленно с мобильного телефона,
								смарт-часов или web-портала</li>
							<li>Просматривайте статистику зарядки в реальном времени</li>
							<li>Контролируйте потребление электроэнергии и расходы с помощью графиков и диаграмм</li>
							<li>Получайте Push-уведомления об окончании зарядки, о запланированной зарядки, обновлениях и т.д.
							</li>
						</ul>
						<div className="app-section__btn-wrapper">
							<a href="https://apps.apple.com/tr/app/wallbox/id1188288011" target="_blank">
								<img src={apple} alt="App Store" width="135" height="41"/>
							</a>
							<a href="https://play.google.com/store/apps/details?id=com.wallbox&hl=ru&gl=US" target="_blank">
								<img src={google} alt="App Store" width="135" height="41"/>
							</a>
						</div>
					</div>
					<div className="col-lg-6 d-flex flex-column justify-content-center">
						<div className="app-section__img-wrapper">
							<img src={app1} className="app1"/>
							<img src={app2} className="app2"/>
							<img src={app3} className="app3"/>
							<StaticImage
								className="app4"
								src="../../images/app4.png"
								alt="App4"
								placeholder="blurred"
							/>
							<StaticImage
								className="app5"
								src="../../images/app5.png"
								alt="App5"
								placeholder="blurred"
							/>
						</div>
						<div className="app-section__second-btn-wrapper">
							<a href="https://apps.apple.com/tr/app/wallbox/id1188288011" target="_blank">
								<img src={apple} alt="App Store" width="135" height="41"/>
							</a>
							<a href="https://play.google.com/store/apps/details?id=com.wallbox&hl=ru&gl=US" target="_blank">
								<img src={google} alt="App Store" width="135" height="41"/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
)

export default AppSection