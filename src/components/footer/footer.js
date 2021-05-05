import * as React from "react"
import { Link } from "gatsby"

import "./footer.sass"

import logo from '../../images/logo.svg'

const Footer = () => (
<footer className="footer">
	<div className="footer__container container-fluid">
    <div className="row">
			<div className="col-md-5">
        <div className="footer__logo">
          <Link to="/">
						<img src={logo} alt="Logo" />
					</Link>
        </div>
        <p className="footer__copmany">ООО "Черутти" - официальный дистрибьютор зарядных станций Wallbox в Республике Беларусь</p>
        <p className="footer__unp">УНП 191877562</p>
      </div>
      <div className="col-6 col-md-2 footer__nav">
        <div className="title">Каталог</div>
					<ul>
						<li><a href="#">Pulsar</a></li>
						<li><a href="#">Pulsar Plus</a></li>
						<li><a href="#">Commander 2</a></li>
						<li><a href="#">Cooper SB</a></li>
					</ul>
				</div>
			<div className="col-6 col-md-2 footer__nav">
        <div className="title">Клиенту</div>
          <ul>
            <li><a href="#">О бренде</a></li>
            <li><a href="#">О компании</a></li>
            <li><a href="#">Контакты</a></li>
            <li><a href="#">Партнерам</a></li>
          </ul>
        </div>
        <div className="col-12 col-md-3 footer__btn-wrapper">
          <div className="footer__btn">
						<a href="#" className="btn btn--accent m-open" data-modal="modal-callback">Заказать звонок</a>
          </div>
        </div>
    </div>
    <div className="footer__bottom">
      <div className="footer__copyright">
        <span>©</span>ООО "Черутти" 2021
			</div>
      <div className="footer__dev">
        <a href="https://simpla.studio">Дизайн и разработка сайта SIMPLA.</a>
      </div>
    </div>
  </div>
</footer>
)

export default Footer