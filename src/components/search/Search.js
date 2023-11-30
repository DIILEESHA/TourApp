import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Search = ({ onSearch }) => {
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guestCount, setGuestCount] = useState(1);

  const handleSearch = () => {
    // Pass the search criteria to the parent component
    onSearch({ location, startDate, endDate, guestCount });
  };

  return (
    <div>
      <label>Location:</label>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <label>Check-in Date:</label>
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />

      <label>Check-out Date:</label>
      <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />

      <label>Guests:</label>
      <input
        type="number"
        value={guestCount}
        onChange={(e) => setGuestCount(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
