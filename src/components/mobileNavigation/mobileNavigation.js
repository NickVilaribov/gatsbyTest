import * as React from "react"

import "./mobileNavigation.sass"

import burgerClose from '../../images/burger--close.svg'
import pulsar from '../../images/pulsar.svg'
import pulsarPlus from '../../images/pulsarplus.svg'
import commander from '../../images/commander2.svg'
import cooper from '../../images/cooper.svg'


const closeMobileNav = () => {
  const menu = document.querySelector('.mobile-navigation')
  menu.classList.toggle('is-active')
}

const MobileNav = () => (
<div className="mobile-navigation">
   <div className="mobile-navigation__bgc"></div>
   <div className="mobile-navigation__body">
      <div className="mobile-navigation__top">
         <div className="mobile-navigation__burger">
            <img src={burgerClose} alt="Close" onClick={closeMobileNav} />
         </div>
      </div>
      <div className="mobile-navigation__center">
         <ul className="menu menu--mobile">
            <li className="menu__item"><a href="#why" className="menu__item">О бренде</a></li>
            <li className="menu__item"><a href="#catalog" className="menu__item">Каталог</a>
               <ul className="sub-menu">
                  <li className="sub-menu__item">
                     <a href="#">
                        <div className="icon">
                           <img src={pulsar} alt="" />
                        </div>
                        <div className="text">Pulsar</div>
                     </a>
                  </li>
                  <li className="sub-menu__item is-active">
                     <a href="#">
                        <div className="icon">
                           <img src={pulsarPlus} alt="" />
                        </div>
                        <div className="text">Pulsar Plus</div>
                     </a>
                  </li>
                  <li className="sub-menu__item">
                     <a href="#">
                        <div className="icon">
                           <img src={commander} alt="" />
                        </div>
                        <div className="text">Commander 2</div>
                     </a>
                  </li>
                  <li className="sub-menu__item">
                     <a href="#">
                        <div className="icon">
                           <img src={cooper} alt="" />
                        </div>
                        <div className="text">Cooper SB</div>
                     </a>
                  </li>
               </ul>
            </li>
            <li className="menu__item"><a href="#company" className="menu__item">О компании</a></li>
            <li className="menu__item"><a href="#contacts" className="menu__item">Контакты</a></li>
            <li className="menu__item"><a href="#partners" className="menu__item">Партнерам</a></li>
         </ul>
         <div className="mobile-navigation__btns">
         </div>
      </div>
   </div>
</div>
)

export default MobileNav