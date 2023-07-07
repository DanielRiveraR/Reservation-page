import React, { useState } from 'react';
import Button from './Button';
import { Formik } from 'formik';



const BookingForm = ({availableTimes, dispatch, submitData}) => {
  const minGuest = 1;
  const maxGuest = 10;
  const occasions = ['Birthday', 'Anniversary'];

  const today = new Date().toISOString().split('T')[0];
  const [bookingDate, setBookingDate] = useState(today);
  const defaultTime = availableTimes[0];
  const [time, setTime] = useState(defaultTime);
  const [ numberOfGuest, setNumberOfGuest ] = useState(minGuest);
  const [ occasion, setOccasion] = useState([0]);

  const handleDateChange = async (e) => {
    setBookingDate(e.target.value);
    dispatch(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      bookingDate,
      time,
      numberOfGuest,
      occasion,
    };
    submitData(formData);
  };
  
  return (
    <>
      <form 
        className='max-width-container' 
        style={{ display: 'grid', maxWidth: '200px', gap: '20px'}}
        onSubmit={handleSubmit}
      >
        <label htmlFor="res-date">
          Choose date
        </label>
        <input 
          type="date" 
          id="res-date" 
          value={bookingDate} 
          onChange={handleDateChange}
          required={true} 
        />
        <label htmlFor="res-time">
          Choose time
        </label>
        <select 
          id="res-time" 
          value={time} 
          onChange={handleTimeChange}
          required={true}
        >
          {availableTimes.map((times) => {
            return <option key={times} value={times}>{times}</option>;
          })}
        </select>
        <label htmlFor="guests">
          Number of guests
        </label>
        <input 
          type="number" 
          placeholder="1" 
          min={minGuest} 
          max={maxGuest} 
          id="guests" 
          onChange={e => setNumberOfGuest(e.target.value)}
          required={minGuest}
        />
        <label htmlFor="occasion">
          Occasion
        </label>
        <select 
          id="occasion" 
          onChange={e => setOccasion(e.target.value)}
        >
          {occasions.map(occasion =>
            <option key={occasion}>
              {occasion}
            </option>
          )}
        </select>
        <Button type="submit" value="Make Your reservation" text={"Make Your reservation"}/>
      </form>
    </>
  );
};

export default BookingForm;

