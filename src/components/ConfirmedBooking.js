import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from "./FormContext";
import Button from "./Button";

const ConfirmedBooking = () => {
  // const { bookingData } = useContext(FormContext);
  const navigate = useNavigate();

  const handleBackToForm = () => {
    console.log('back to home works');
    navigate('/');
  };

  return (
    <div className="confirmation-page max-width-container">
      <h2> Your booking has been confirmed</h2>
      <p>We'll send you an email with all the details.</p>
      {/* {bookingData && (
        <>
          <p>Booking details:</p>
          <p>Date: {bookingData.bookingDate}</p>
          <p>Time: {bookingData.time}</p>
          <p>Number of guests: {bookingData.numberOfGuest}</p>
          <p>Occasion: {bookingData.occasion}</p>
        </>
      )} */}
      <p>Have a nice day!</p>
      <Button onClick={(handleBackToForm)}  text={'Go Back to Home'}/>
    </div>
  );
};

export default ConfirmedBooking;
