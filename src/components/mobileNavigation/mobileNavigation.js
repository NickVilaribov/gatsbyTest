import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

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
<div class="mobile-navigation">
   <div class="mobile-navigation__bgc"></div>
   <div class="mobile-navigation__body">
      <div class="mobile-navigation__top">
         <div class="mobile-navigation__burger">
            <img src={burgerClose} alt="Close" onClick={closeMobileNav} />
         </div>
      </div>
      <div class="mobile-navigation__center">
         <ul class="menu menu--mobile">
            <li class="menu__item"><a href="#why" class="menu__item">О бренде</a></li>
            <li class="menu__item"><a href="#catalog" class="menu__item">Каталог</a>
               <ul class="sub-menu">
                  <li class="sub-menu__item">
                     <a href="#">
                        <div class="icon">
                           <img src={pulsar} alt="" />
                        </div>
                        <div class="text">Pulsar</div>
                     </a>
                  </li>
                  <li class="sub-menu__item is-active">
                     <a href="#">
                        <div class="icon">
                           <img src={pulsarPlus} alt="" />
                        </div>
                        <div class="text">Pulsar Plus</div>
                     </a>
                  </li>
                  <li class="sub-menu__item">
                     <a href="#">
                        <div class="icon">
                           <img src={commander} alt="" />
                        </div>
                        <div class="text">Commander 2</div>
                     </a>
                  </li>
                  <li class="sub-menu__item">
                     <a href="#">
                        <div class="icon">
                           <img src={cooper} alt="" />
                        </div>
                        <div class="text">Cooper SB</div>
                     </a>
                  </li>
               </ul>
            </li>
            <li class="menu__item"><a href="#company" class="menu__item">О компании</a></li>
            <li class="menu__item"><a href="#contacts" class="menu__item">Контакты</a></li>
            <li class="menu__item"><a href="#partners" class="menu__item">Партнерам</a></li>
         </ul>
         <div class="mobile-navigation__btns">
         </div>
      </div>
   </div>
</div>
)

export default MobileNav