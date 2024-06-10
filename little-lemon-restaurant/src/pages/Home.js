import React from 'react'
import '../styles/Home.css'
import heroImg from '../images/restauranfood.jpg'
import greekSalad from '../images/greek salad.jpg'
import bruchetta from '../images/bruchetta.jpg'
import lemonDessert from '../images/lemon dessert.jpg'
import deliveryIcon from '../images/delivery-scooter-icon.svg'
import starIcon from '../images/star-icon.svg'
import reviewer1 from '../images/reviewer1.png'
import reviewer2 from '../images/reviewer2.png'
import reviewer3 from '../images/reviewer3.png'
import reviewer4 from '../images/reviewer4.png'
import aboutImg1 from '../images/Mario and Adrian A.jpg'
import aboutImg2 from '../images/Mario and Adrian b.jpg'

const Home = () => {
  return (
    <main>
      <article id='heroSectionBg'>
        <div className='center-section' id='hero'>
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

      <article className='center-section' id='highlights'>
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
              <aside><a href='/order-online'>Order a delivery</a></aside>
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
              <aside><a href='/order-online'>Order a delivery</a></aside>
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
              <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
              <aside><a href='/order-online'>Order a delivery</a></aside>
            </div>
          </div>
        </section>
      </article>

      <article id='testimonialsBg'>
        <section id='testimonials' className='center-section'>
          <div id='testimonialsHeader'>
            <h2>Testimonials</h2>
          </div>
          <div id='testimonialsCards'>

            <div className='testimonial-card'>
              <div className='star-rating'>
                <img src={starIcon} />
                <img src={starIcon} />
                <img src={starIcon} />
                <img src={starIcon} />
                <img src={starIcon} />
              </div>
              <div className='user-container'>
                <img src={reviewer1} alt='Duane Dickson' />
                <p>Duane Dickson</p>
              </div>

              <p className='review-quote'>"A Chicago must-see!"</p>
            </div>

            <div className='testimonial-card'>
              <div className='star-rating'>
                <img src={starIcon} />
                <img src={starIcon} />
                <img src={starIcon} />
                <img src={starIcon} />
                <img src={starIcon} />
              </div>
              <div className='user-container'>
                <img src={reviewer2} alt='John Galloway' />
                <p>John Galloway</p>
              </div>

              <p className='review-quote'>"Pastries baked to perfection."</p>
            </div>

            <div className='testimonial-card'>
              <div className='star-rating'>
                <img src={starIcon} />
                <img src={starIcon} />
                <img src={starIcon} />
                <img src={starIcon} />
                <img src={starIcon} />
              </div>
              <div className='user-container'>
                <img src={reviewer3} alt='Magali Vasquez' />
                <p>Magali Vasquez</p>
              </div>

              <p className='review-quote'>"Mouth-watering!"</p>
            </div>

            <div className='testimonial-card'>
              <div className='star-rating'>
                <img src={starIcon} />
                <img src={starIcon} />
                <img src={starIcon} />
                <img src={starIcon} />
                <img src={starIcon} />
              </div>
              <div className='user-container'>
                <img src={reviewer4} alt='Lesley Harris' />
                <p>Lesley Harris</p>
              </div>

              <p className='review-quote'>"All of Italy, in just one place."</p>
            </div>
          </div>
        </section>
      </article>

      <article id='aboutSectionContainer'>
        <section id='about' className='center-section'>
          <div id='aboutInfo'>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Little Lemon is an Italian restaurant in Chicago, founded by brothers Mark and Adrian who brought their culinary heritage from Italy to the Windy City.<br /><br />We've aimed to create a warm, family-friendly dining experience with authentic Italian flavors. Using traditional recipes and fresh ingredients, Little Lemon has quickly became a beloved spot for genuine Italian cuisine.</p>
          </div>
          <div id='aboutImages'>
            <img src={aboutImg1} alt='Mario and Adrian talking.' />
            <img src={aboutImg2} alt='Mario and Adrian looking at the countertop and smiling.' />
          </div>
        </section>
      </article>
    </main>
  )
}

export default Home