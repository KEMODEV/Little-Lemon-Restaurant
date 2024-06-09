import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div id='logoContainer'>
        <img src='' alt='Little Lemon logo.' />
      </div>
      <div id='doormatLinksContainer'>

        <div className='doormatLinksCol'>
          <h4>Doormat Navigation</h4>
          <ul>
            <li><a href='/'></a></li>
            <li><a href='/about'></a></li>
            <li><a href='/menu'></a></li>
            <li><a href='/reservations'></a></li>
            <li><a href='/order-online'></a></li>
            <li><a href='/login'></a></li>
          </ul>
        </div>
        <div className='doormatLinksCol'>
          <h4>Contact</h4>
          <ul>
            <li><a href='/contact'></a></li>
            <li><a href='/contact'></a></li>
            <li><a href='/contact'></a></li>
          </ul>
        </div>
        <div className='doormatLinksCol'>
          <h4>Social Media Links</h4>
          <ul>
            <li><a href='instagram.com'></a></li>
            <li><a href='facebook.com'></a></li>
            <li><a href='pinterest.com'></a></li>
          </ul>
        </div>

      </div>
    </footer>
  )
}

export default Footer