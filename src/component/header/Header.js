import React from "react";
import "./header.scss";
import { Button } from "../button/button";

function Header() {
   return (
      <header className="header">
         <div className="header__wrap container">
            <a href="#" className="header__logo">
               <img src="./img/houzing.svg" alt="houzing website logo" />
            </a>

            <nav className="header__nav">
               <ul className="header__list">
                  <a href="#" className="header__link">
                     <li className="header__item">Home</li>
                  </a>
                  <a href="#" className="header__link">
                     <li className="header__item">Properties</li>
                  </a>
                  <a href="#" className="header__link">
                     <li className="header__item">Contacts</li>
                  </a>
               </ul>
            </nav>
            <button class="button button-white header__button">Login</button>
         </div>
      </header>
   );
}

export default Header;
