import React from "react";
import Icons from "../utils/Icons";

function SearchBar() {
  return (
    <div className="search-bar">
      <div className="searchbar-input">
        <Icons
          type="search"
          style={{ fontSize: "1.3em", color: "#767879" }}
          className="sidebar-search-icon"
        />
        <input type="text" placeholder="Search Artists, Songs, and albums" />
      </div>
      <div className="searchbar-notification">
        <Icons
          type="notification"
          style={{
            color: "#767879",
            fontSize: "1.7em",
          }}
          className="searchbar-notification-icon"
        />
      </div>
      <div className="searchbar-profile">
        <img
          src={
            "https://pbs.twimg.com/profile_images/1572696301606785025/0wQxF6xh_200x200.jpg"
          }
        />
      </div>
      <div className="searchbar-select">
        <select name="" id="">
          <option>Design Half-blood</option>
        </select>
      </div>
    </div>
  );
}

export default SearchBar;
