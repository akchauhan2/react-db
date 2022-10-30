import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getInitialDetails } from "../store/reducers/initialReducer";
import { useSelector } from "react-redux";
import { setPlaying } from "../store/reducers/playingReducer";
function RecentSong() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInitialDetails());
  }, [dispatch]);
  const { tracks = { hits: [] }, artists } = useSelector(
    (state) => state.initial
  );
  console.log(artists);
  const playthis = (track) => {
    dispatch(setPlaying(track));
  };
  return (
    <div className="RecentSongs">
      <div className="d-flex mt-1 hit-tracks-cards">
        {tracks?.hits?.map((t) => (
          <div
            onClick={() => playthis(t)}
            className="card hit-tracks-card p-1"
            style={{
              background: "#" + t.track.images.joecolor.split(":")[1],
              color: "b:fffffdp:0b0a08s:313029t:3c3b39q:5a5954",
            }}
          >
            <img
              className="hit-tracks-img"
              src={t.track.images.background}
              alt={t.track.subtitle}
            />
            <h4 className="mt-1 fs-3 color-1 ">{t.track.subtitle}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentSong;
