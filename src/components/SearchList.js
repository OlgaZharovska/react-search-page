import React from "react";
import { SearchItem } from "./SearchItem";

export default ({ searchResults }) => {
  return (
    <div className="users-list">
      <div className="phrases-container">
        {searchResults != null &&
          searchResults.map(searchResult => (
            <SearchItem content={searchResult} key={searchResult} />
          ))}
      </div>
    </div>
  );
};
