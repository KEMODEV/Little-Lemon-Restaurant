import React from 'react'
import '../App.css'
import '../styles/Footer.css'
import footerLogo from '../images/footer_logo.png'

const Footer = () => {
  return (
    <footer>
      <div id='logoContainer'>
        <img src={footerLogo} alt='Little Lemon logo.' />
      </div>
      <div id='footerLinksContainer'>

        <div id='doormatNavContainer' className='footer-links-col'>
          <h4>Doormat Navigation</h4>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='/menu'>Menu</a></li>
            <li><a href='/reservations'>Reservations</a></li>
            <li><a href='/order-online'>Order Online</a></li>
            <li><a href='/login'>Login</a></li>
          </ul>
        </div>
        <div id='contactContainer' className='footer-links-col'>
          <h4>Contact</h4>
          <ul>
            <li><a href='/contact'>Adress</a></li>
            <li><a href='/contact'>Phone number</a></li>
            <li><a href='/contact'>Email</a></li>
          </ul>
        </div>
        <div id='socialMediaContainer' className='footer-links-col'>
          <h4>Social Media Links</h4>
          <ul>
            <li><a href='instagram.com'>Instagram</a></li>
            <li><a href='facebook.com'>Facebook</a></li>
            <li><a href='pinterest.com'>Pinterest</a></li>
          </ul>
        </div>

      </div>
    </footer>
  )
}

export default Footer