import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from "./FormContext";
import Button from "./Button";

const ConfirmedBooking = (bookingData) => {
  // const { bookingData } = useContext(FormContext);
  const navigate = useNavigate();

  if (!bookingData) {
    return null; // Si bookingData es undefined, no se muestra nada
  }

  const { bookingDate, time, numberOfGuest, occasion } = bookingData;
  
  const handleBackToForm = () => {
    console.log('back to home works');
    navigate('/');
  };

  return (
    <div className="confirmation-page max-width-container">
      <h2> Your booking has been confirmed</h2>
      <p>We'll send you an email with all the details.</p>
      {bookingData && (
        <>
          <p>Booking details:</p>
          <p>Date: {bookingDate}</p>
          <p>Time: {time}</p>
          <p>Number of guests: {numberOfGuest}</p>
          <p>Occasion: {occasion}</p>
        </>
      )}
      <p>Have a nice day!</p>
      <Button onClick={(handleBackToForm)}  text={'Go Back to Home'}/>
    </div>
  );
};

export default ConfirmedBooking;
