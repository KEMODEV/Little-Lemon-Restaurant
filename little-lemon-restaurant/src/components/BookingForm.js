import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { render, screen } from "@testing-library/react"
import '../styles/BookingPage.css'
import occasionIcon from '../images/champagne-glasses-icon.svg'

const BookingForm = (props) => {
  const [validDate, setValidDate] = useState(false);
  const [validTime, setValidTime] = useState(false);
  const [validGuests, setValidGuests] = useState(false);
  const [validOccasion, setValidOccasion] = useState(false);
  const validFields = [validDate, validTime, validGuests, validOccasion];
  const navigate = useNavigate();

  const renderTimeOptions = () => {
    const options = [];
    options.push(
      <option key='' value=''>
        Select Time
      </option>
    );

    for (let i = 0; i < props.availableTimes.times.length; i++) {
      options.push(
        <option key={props.availableTimes.times[i]} value={props.availableTimes.times[i]}>
          {props.availableTimes.times[i]}
        </option>
      );
    }

    return options;
  };

  // Checks field when change occurs, then decides if it's a valid value
  const checkField = (e) => {
    const { id, value } = e.target;

    switch (id) {
      case 'res-date':
        if (value.length === 10) {
          setValidDate(true);
          props.setBookingData({ ...props.bookingData, date: value });
        } else {
          setValidDate(false);
          props.setBookingData({ ...props.bookingData, date: '' });
        }
        break;
      case 'res-time':
        if (value) {
          setValidTime(true);
          props.setBookingData({ ...props.bookingData, time: value });
        } else {
          setValidTime(false);
          props.setBookingData({ ...props.bookingData, time: '' });
        }
        break;
      case 'guests':
        if (value && /^[0-9]+$/.test(value)) {
          setValidGuests(true);
          props.setBookingData({ ...props.bookingData, guests: value });
        } else {
          setValidGuests(false);
          props.setBookingData({ ...props.bookingData, guests: '' });
        }
        break;
      case 'occasion':
        if (value) {
          setValidOccasion(true);
          props.setBookingData({ ...props.bookingData, occasion: value });
        } else {
          setValidOccasion(false);
          props.setBookingData({ ...props.bookingData, occasion: '' });
        }
        break;
      default:
        throw Error('onChange function element id error.');
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    /*
      Determines if the form is properly filled and
      sends the user to the confirmation page
    */
    if (props.submitForm && !validFields.includes(false)) {
      navigate("/confirmation");
    } else {
      alert("You did not properly fill the form.");
    }
  }


  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <section id='dateTimeContainer' className='form-section'>
          <div id='timeContainer'>
            <label htmlFor="res-date" data-testid="dateLabel">Choose Date</label>
            <input
              type="date"
              id="res-date"
              onChange={(e) => checkField(e)}
            />
          </div>

          <div id='dateContainer'>
            <label htmlFor="res-time">Choose Time</label>
            <select
              id="res-time"
              onChange={(e) => checkField(e)}
            >
              {renderTimeOptions()}
            </select>
          </div>
        </section>

        <section id='guestsOccasionSection' className='form-section'>
          <div id='guestsNumContainer'>
            <label htmlFor="guests">Number of Guests</label>
            <input
              type="number"
              placeholder="1"
              min="1" max="10"
              id="guests"
              onChange={(e) => checkField(e)}
            />
          </div>

          <div id='occasionContainer'>
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              onChange={(e) => checkField(e)}
            >
              <option value=''>Occasion</option>
              <option value='birthday'>Birthday</option>
              <option value='engagement'>Engagement</option>
              <option value='anniversary'>Anniversary</option>
            </select>
          </div>
        </section>

        <section id='submitContainer'>
          <input
            type="submit"
            value="Make Your Reservation"
          />
        </section>

      </fieldset>
    </form>
  )
}

export default BookingForm