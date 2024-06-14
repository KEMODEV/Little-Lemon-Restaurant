import { render, screen } from "@testing-library/react";
import BookingForm from './components/BookingForm';

test('Renders the Choose Date heading', () => {
  render(<BookingForm />);
  const dateLabelElement = screen.getByTestId("dateLabel");
  expect(dateLabelElement).toBeInTheDocument();
})