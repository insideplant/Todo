import React from 'react';

const Sortbutton = ({sortName, handleSort}) => (
  <button onClick={() => handleSort(sortName)}>
    {sortName.toUpperCase()}
  </button>
);

export default Sortbutton 
