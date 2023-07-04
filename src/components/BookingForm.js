import React, { useState } from 'react';
import Button from './Button';

const BookingForm = ({ availableTimes, dispatch }) => {
  const [bookingDate, setBookingDate] = useState('');

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setBookingDate(selectedDate);
    dispatch(selectedDate);
  };

  return (
    <>
      <form className='max-width-container' style={{ display: 'grid', maxWidth: '200px', gap: '20px'}}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={bookingDate} onChange={handleDateChange} />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time">
          {availableTimes ? (
            availableTimes.map((time) => {
              return <option key={time}>{time}</option>;
            })
          ) : null}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion">
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <Button type="submit" value="Make Your reservation" text={"Make Your reservation"}/>
      </form>
    </>
  );
};

export default BookingForm;
