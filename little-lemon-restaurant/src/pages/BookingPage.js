import React from 'react'
import '../styles/BookingPage.css'
import BookingForm from '../components/BookingForm'

const BookingPage = (props) => {
  return (
    <main>
      <h1 id='reservationsHeader'>Set Your Reservations</h1>
      <BookingForm
        bookingData={props.bookingData}
        setBookingData={props.setBookingData}
        availableTimes={props.availableTimes}
        setAvailableTimes={props.setAvailableTimes}
        submitForm={props.submitForm}
      />
    </main>
  )
}

export default BookingPage