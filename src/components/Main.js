import React from "react";
import SearchBar from "./SearchBar";

function Main() {
  return (
    <div className="main">
      <SearchBar />
      <div className="cover-bar">
        <h1>cover</h1>
      </div>
      <div className="song-bar">
        <h1>song-bar</h1>
      </div>
    </div>
  );
}

export default Main;
