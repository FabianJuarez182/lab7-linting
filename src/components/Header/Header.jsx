import './Header.css'
import React from 'react'

function Header() {
  return (
    <div className="header-wrapper">
      <img
        className="Megaphone-icon"
        alt="Megaphone"
        src="../src/assets/megaphone.png"
      />
      <img className="popout-trig" alt="popout" src="../src/assets/arrow.png" />
      <img
        className="header__button--menu"
        alt="button-menu"
        src="../src/assets/menu.png"
      />
    </div>
  )
}

export default Header
