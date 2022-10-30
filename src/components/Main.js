import React from "react";
import CoverBar from "./CoverBar";
import PlayingArea from "./PlayingArea";
import SearchBar from "./SearchBar";
import SongBar from "./SongBar";

function Main() {
  return (
    <div className="main">
      <SearchBar />
      <CoverBar />
      <SongBar />

      <PlayingArea />
    </div>
  );
}

export default Main;
