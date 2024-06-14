import React, { useEffect } from 'react'
import '../styles/ConfirmedBooking.css'
import checkmarkIcon from '../images/checkmark-icon.svg'

const ConfirmedBooking = (props) => {

  return (
    <main>
      <div id='confirmationHeader'>
        <img src={checkmarkIcon} alt='Checkmark icon.' />
        <h1>Booking Confirmed!</h1>
      </div>
      <article>
        <p id='dateTimeText'>Your reservation has been made for <span>{props.bookingData.date}</span> @ <span>{props.bookingData.time}</span>.</p>
        <p id='guestsOccasionText'>We sincerely hope you and your <span>{props.bookingData.guests}</span> guests enjoy your <span>{props.bookingData.occasion}</span> celebration.</p>
      </article>
    </main>
  )
}

export default ConfirmedBooking