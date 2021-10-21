import React from 'react';

const Sortbutton = ({sortbutton, handleSort}) => (
  <button onClick={() => handleSort(sortbutton)}>
    {sortbutton.toUpperCase()}
  </button>
);

export default Sortbutton 
