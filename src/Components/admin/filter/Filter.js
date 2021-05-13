import React from "react";

const Filter = ({ setFilter, value }) => {
  const onHandleChange = (e) => {
    setFilter(e.target.value);
  };
  return (
    <label>
      Filter: <input type='text' value={value} onChange={onHandleChange} />
    </label>
  );
};

export default Filter;
