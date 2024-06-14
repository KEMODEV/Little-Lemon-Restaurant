import { useState, useReducer } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { fetchAPI, submitAPI } from "./utils/loadAPIScript";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BookingPage from './pages/BookingPage';
import ConfirmedBooking from './pages/ConfirmedBooking';

function App() {

  const [bookingData, setBookingData] = useState({
    date: " ",
    time: " ",
    guests: " ",
    occasion: " ",
  });
  const today = new Date();
  const init = { times: fetchAPI(today) };
  const [availableTimes, setAvailableTimes] = useReducer(updateTimes, init);

  const submitForm = () => {
    const res = submitAPI(bookingData);
    if (res === true) {
      return true;
    } else {
      return false;
    }
  };

  function initializeTimes() {
    setAvailableTimes({ type: "init" });
  }

  function updateTimes(state, action) {
    if (action.type === "init") {
      return { times: fetchAPI(today) };
    }
    if (action.type === "update_times") {
      let selectedBookingDate = new Date(bookingData.date);
      let newTimes = fetchAPI(selectedBookingDate).filter(
        (time) => time !== "17:00"
      );
      return { times: newTimes };
    }
    throw Error("updateTimes() Error");
  }


  return (
    <Router>
      <Header />

      <Routes>
        <Route
          exact path="/"
          element={<Home />}
        />
        <Route
          path="/reservations"
          element={
            <BookingPage
              bookingData={bookingData}
              setBookingData={setBookingData}
              availableTimes={availableTimes}
              setAvailableTimes={setAvailableTimes}
              submitForm={submitForm}
            />
          }
        />
        <Route
          path="/confirmation"
          element={
            <ConfirmedBooking
              bookingData={bookingData}
              setBookingData={setBookingData}
              availableTimes={availableTimes}
              setAvailableTimes={setAvailableTimes}
            />
          }
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;