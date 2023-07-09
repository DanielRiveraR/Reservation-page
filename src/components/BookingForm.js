import React, { useState } from 'react';
import Button from './Button';

const BookingForm = ({ availableTimes, dispatch, submitData }) => {
  const minGuest = 1;
  const maxGuest = 10;
  const occasions = ['', 'Birthday', 'Anniversary', 'Work-meeting'];

  const [bookingDate, setBookingDate] = useState('');
  const [time, setTime] = useState('');
  const [numberOfGuest, setNumberOfGuest] = useState('');
  const [occasion, setOccasion] = useState(occasions[0]);
  const [interactedFields, setInteractedFields] = useState({});

  const handleDateChange = (e) => {
    setBookingDate(e.target.value);
    dispatch(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleGuestChange = (e) => {
    setNumberOfGuest(e.target.value);
  };

  const handleFieldInteraction = (fieldName) => {
    setInteractedFields((prevInteractedFields) => ({
      ...prevInteractedFields,
      [fieldName]: true,
    }));
  };

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

  const validateDate = () => {
    if (interactedFields.bookingDate && !bookingDate) {
      return 'Please provide a date';
    }
    return '';
  };

  const validateTime = () => {
    if (interactedFields.time && !time) {
      return 'Please provide a time';
    }
    return '';
  };

  const validateGuests = () => {
    if (
      interactedFields.numberOfGuest &&
      (numberOfGuest < minGuest || numberOfGuest > maxGuest)
    ) {
      return `Number of guests must be between ${minGuest} and ${maxGuest}`;
    }
    return '';
  };

  const isFormValid =
    validateDate() === '' && validateTime() === '' && validateGuests() === '';

 

  return (
    <>
      <form
        className='max-width-container'
        style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={bookingDate}
          onChange={handleDateChange}
          onBlur={() => handleFieldInteraction('bookingDate')}
          required={true}
        />
        {validateDate() !== '' && <div className="error-message">{validateDate()}</div>}

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={handleTimeChange}
          onBlur={() => handleFieldInteraction('time')}
          required={true}
        >
          <option value=""></option>
          {availableTimes.map((times) => {
            return <option key={times} value={times}>{times}</option>;
          })}
        </select>
        {validateTime() !== '' && <div className="error-message">{validateTime()}</div>}

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder=""
          min={minGuest}
          max={maxGuest}
          id="guests"
          value={numberOfGuest}
          onChange={handleGuestChange}
          onBlur={() => handleFieldInteraction('numberOfGuest')}
          required={true}
        />
        {validateGuests() !== '' && (
          <div className="error-message">{validateGuests()}</div>
        )}

        <label htmlFor="occasion">Occasion</label>
        <select
          placeholder=''
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          onBlur={() => handleFieldInteraction('occasion')}
        >
          {occasions.map((occasion) => (
            <option key={occasion} value={occasion}>
              {occasion}
            </option>
          ))}
        </select>

        <Button
          type="submit"
          value="Make Your reservation"
          text="Make Your reservation"
          disabled={!isFormValid}
        />
      </form>
    </>
  );
};

export default BookingForm;

