import React from "react";
import data from "../data.js";

export default ({ update }) => {
  const dataSearch = () => {
    const value = document.getElementById("phrase_input").value.toLowerCase();

    const filter = data.filter(item => {
      return value !== "" && item.toLowerCase().includes(value);
    });

    update({
      searchResults: filter,
      searchValue: value
    });
  };
  return (
    <div className="input-container">
      <input
        id="phrase_input"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="bttn" onClick={dataSearch}>
        Search
      </button>
    </div>
  );
};
