import React from "react";
import RecentSong from "./RecentSong";
function Songbar() {
  return (
    <div className="song-bar  mt-3">
      <div className="songs-recents">
        <h1 className="fs-4 color-2">Recently Played</h1>
        <RecentSong />
      </div>
      <div className="songs-lyrics"></div>
    </div>
  );
}

export default Songbar;
