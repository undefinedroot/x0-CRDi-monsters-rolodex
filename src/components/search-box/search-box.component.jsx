import React from 'react';
import './search-box.styles.css';

// no state here, seperation of concerns.
// the only use of this component is taking search input
export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="text"
    placeholder={placeholder}
    onChange={handleChange}
  />
);
