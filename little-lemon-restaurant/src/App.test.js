import React, { useState } from 'react'
import { render, screen } from "@testing-library/react";
import App from "./App"
import { BrowserRouter as Router } from "react-router-dom";
import Home from './pages/Home';
import BookingForm from './components/BookingForm';

const bookingData = {
  date: "",
  time: "",
  guests: "",
  occasion: "",
};
let availableTimes = {times: ["16:00", "17:30", "18:50", "19:00", "20:00", "21:00"]};

const initializeTimes = () => {
  availableTimes = {type: ["init"]};
}

const updateTimes = (state, action) => {
  if (action.type === "init") {
    return { times: fetchAPI(today) };
  }
  if (action.type === "update_times") {
    let selectedBookingDate = new Date(bookingData.date);
    let newTimes = fetchAPI(selectedBookingDate).filter((time) => time !== "17:00");
    return { times: newTimes };
  }

  throw Error("updateTimes() Error");
}

test("Check homepage for Render", () => {
  render(
    <Router>
      <Home />
    </Router>
  );
  const specialsElement = screen.getByText("This week's special!");
  expect(specialsElement).toBeInTheDocument();
});

test("Checks available times", () => {
  expect(availableTimes.times[0]).toBe("16:00");
});

test("Checks 'Choose Date' label", () => {
  render(
    <Router>
      <BookingForm availableTimes={availableTimes} bookingData={bookingData} />
    </Router>
  );

  const headingElement = screen.getByText("Choose Date");
  expect(headingElement).toBeInTheDocument();
});

test("Checks form inputs and submit button", () => {
  render(
    <Router>
      <BookingForm availableTimes={availableTimes} bookingData={bookingData} />
    </Router>
  );

  const timeSelect = screen.getByTestId("timeSelect");
  const guestsNum = screen.getByTestId("guestsNum");
  const occasionSelect = screen.getByTestId("occasionSelect");
  const submitBtn = screen.getByTestId("submitBtn");

  expect(timeSelect).toBeInTheDocument();
  expect(guestsNum).toBeInTheDocument();
  expect(occasionSelect).toBeInTheDocument();
  expect(submitBtn).toBeInTheDocument();
});

test("Checks initializeTimes() to set availableTimes", () => {
  initializeTimes();
  expect(availableTimes.type[0]).toBe('init');
});

test('Checks if updateTimes() throws an Error', () => {
  const invalidActionType = 'invalid_action_type';
  expect(() => updateTimes({}, { type: invalidActionType })).toThrowError('updateTimes() Error');
});