import React from "react";
import CoverBar from "./CoverBar";
import SearchBar from "./SearchBar";
import SongBar from "./SongBar";

function Main() {
  return (
    <div className="main">
      <SearchBar />
      <CoverBar />
      <SongBar />
    </div>
  );
}

export default Main;
