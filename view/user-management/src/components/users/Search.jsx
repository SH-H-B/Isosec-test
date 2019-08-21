import React from "react";

const Search = ({ searchInputHandler }) => {
  return (
    <React.Fragment>
      <div className=" mb-3 col-md-5 col-xs-8">
        <input
          type="text"
          className="form-control"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder="Search"
          onInput={searchInputHandler}
        />
      </div>
    </React.Fragment>
  );
};

export default Search;
