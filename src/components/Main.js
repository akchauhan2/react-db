import React from "react";
import CoverBar from "./CoverBar";
import SearchBar from "./SearchBar";
import SongBar from "./SongBar";

function Main() {
  return (
    <div className="main">
      <SearchBar />
      <CoverBar />
      <img src="https://scontent-del1-2.xx.fbcdn.net/v/t39.30808-6/312440419_632273601819665_2066908361153909579_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=lP93QpSeAjMAX-wcHuy&_nc_ht=scontent-del1-2.xx&oh=00_AT8kJ9Ga0OERC9LOEAL_Nw85uVhdeY1pZQG651JvT4EcLQ&oe=6358483F" />
      <SongBar />
    </div>
  );
}

export default Main;
