import React from 'react';

const FilterInput = (props) => {
  return (
    <form className="form-group" style={{marginTop: '20px'}}>
      <input className="form-control" onChange={props.handleChange} placeholder="Enter artist name" />
    </form>
  );
}

export default FilterInput;