import * as React from "react"
import { Link } from "gatsby"

import "./header.sass"

import logo from '../../images/logo.svg'
import burger from '../../images/burger--open.svg'

const openMobileNav = () => {
  const menu = document.querySelector('.mobile-navigation')
  menu.classList.toggle('is-active')
}

const Header = () => (
  <header className="header">
  <div className="header__container	container-fluid">
      <div className="header__logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <nav className="header__menu menu">
        <a href="#why" className="menu__item">О бренде</a>
        <a href="#catalog" className="menu__item">Каталог</a>
        <a href="#company" className="menu__item">О компании</a>
        <a href="#contacts" className="menu__item">Контакты</a>
        <a href="#partners" className="menu__item">Партнерам</a>
      </nav>
      <div className="header__btn-wrapper">
        <div className="btn btn--clean m-open" data-modal="modal-callback">
            Связаться
        </div>
        <div className="header__burger">
            <img src={burger} alt="burger" onClick={openMobileNav}/>
        </div>
      </div>
  </div>
</header>
)

export default Header