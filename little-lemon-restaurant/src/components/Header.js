import React from 'react'
import '../styles/Header.css'
import logo from '../images/Logo .svg'

const Header = () => {
  return (
    <header>
        <a href='/'><img src={logo} alt='Little Lemon logo.' /></a>
        <nav>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href='/menu'>Menu</a></li>
            <li><a href='/reservations'>Reservations</a></li>
            <li><a href='/order-online'>Order Online</a></li>
            <li><a href='/login'>Login</a></li>
          </ul>
        </nav>
    </header>
  )
}

export default Header