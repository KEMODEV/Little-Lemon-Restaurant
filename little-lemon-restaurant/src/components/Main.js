import React from 'react'
import '../styles/Main.css'
import heroImg from '../images/restauranfood.jpg'
import greekSalad from '../images/greek salad.jpg'
import bruchetta from '../images/bruchetta.jpg'
import lemonDessert from '../images/lemon dessert.jpg'
import deliveryIcon from '../images/delivery-scooter-icon.svg'

const Main = () => {
  return (
    <main>
      <article id='heroSectionBg'>
        <div className='center-section' id='heroSection'>
          <div>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <button id='reserveTableBtn'>Reserve a Table</button>
          </div>
          <div>
            <img
              src={heroImg}
              alt='Holding plate of Mediterranean food.'
              id='heroImg'
            />
          </div>
        </div>
      </article>

      <article className='center-section' id='highlightsSection'>
        <section id='specialHeader'>
          <h2>This week's special!</h2>
          <button id='onlineMenuBtn'>Online Menu</button>
        </section>
        <section id='specialsCardsContainer'>
          <div className='specials-cards'>
            <div className='specials-img-container'>
              <img src={greekSalad} alt='A greek salad.' />
            </div>
            <div className='specials-card-header'>
              <h4>Greek Salad</h4>
              <p>$12.99</p>
            </div>
            <div className='specials-card-body'>
              <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
              <aside><a>Order a delivery</a></aside>
            </div>
          </div>

          <div className='specials-cards'>
            <div className='specials-img-container'>
              <img src={bruchetta} alt='A bruchetta.' />
            </div>
            <div className='specials-card-header'>
              <h4>Bruchetta</h4>
              <p>$5.99</p>
            </div>
            <div className='specials-card-body'>
              <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
              <aside><a>Order a delivery</a></aside>
            </div>
          </div>

          <div className='specials-cards'>
            <div className='specials-img-container'>
              <img src={lemonDessert} alt='A lemon cake dessert.' />
            </div>
            <div className='specials-card-header'>
              <h4>Lemon Dessert</h4>
              <p>$5.00</p>
            </div>
            <div className='specials-card-body'>
              <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
              <aside><a>Order a delivery</a></aside>
            </div>
          </div>
        </section>
      </article>
    </main>
  )
}

export default Main