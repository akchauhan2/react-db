import React from "react";
import RecentSong from "./RecentSong";
function Songbar() {
  return (
    <div className="song-bar d-flex mt-1">
      <div className="songs-recents">
        <h1 className="fs-3 color-1">Recently Played</h1>
        <RecentSong />
      </div>
      <div className="songs-lyrics">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, nostrum,
        et similique beatae aut sint eum laborum sapiente optio voluptatum, cum
        architecto esse aspernatur. Dicta laudantium eveniet totam velit illo!
      </div>
    </div>
  );
}

export default Songbar;
