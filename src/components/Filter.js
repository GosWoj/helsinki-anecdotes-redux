import React from "react";
import { connect } from "react-redux";
import { setFilter } from "../reducers/filterReducer";

const Filter = (props) => {
  const handleChange = (e) => {
    e.preventDefault();

    props.setFilter(e.target.value);
  };

  return (
    <div style={{ marginBottom: "10px" }}>
      Filter:
      <input name="filter" onChange={handleChange} />
    </div>
  );
};

const mapDispatchToProps = {
  setFilter,
};

export default connect(null, mapDispatchToProps)(Filter);
