import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPlaying } from "../../store/reducers/playingReducer";
import PlayBox from "./PlayBox";

function SpotifyPlayer() {
  const CLIENT_ID = process.env.REACT_APP_CLIENTID;
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    // getToken()

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
  }, []);
  const searchTracks = async (e) => {
    e.preventDefault();
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: "track",
      },
    });

    setTracks(data.tracks.items);
  };

  const RenderTracks = () => {
    console.log("=>tracks", tracks);
    const dispatch = useDispatch();
    const playTrack = (track) => {
      dispatch(setPlaying(track));
    };
    return (
      <>
        {tracks?.map((track) => (
          <div
            className="flex-1"
            style={{
              height: "100px",
            }}
            key={track.id}
          >
            {track.album?.images?.length ? (
              <img
                className="flex-1"
                src={track.album?.images[0].url}
                alt=""
                style={{ maxHeight: "200px" }}
                onClick={() => playTrack(track)}
              />
            ) : (
              <div>No Image</div>
            )}
            {track.name}
          </div>
        ))}
      </>
    );
  };
  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  return (
    <div className="player ">
      <div className="d-flex">
        {!token ? (
          <a
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          >
            Login to Spotify
          </a>
        ) : (
          <button onClick={logout}>Logout</button>
        )}

        {token ? (
          <form onSubmit={searchTracks}>
            <input type="text" onChange={(e) => setSearchKey(e.target.value)} />
            <button type={"submit"}>Search</button>
          </form>
        ) : (
          <h2>Please login</h2>
        )}
      </div>
      <div
        className="d-flex"
        style={{
          maxHeight: "100px",
          maxWidth: "calc(100vw - 300px)",
          overflow: "auto",
        }}
      >
        {RenderTracks()}
      </div>
    </div>
  );
}

function PlayingArea() {
  const playing = useSelector((state) => state.playingReducer.playing);
  return (
    <div className="PlayingArea d-flex w-100 flex-column">
      {playing && (
        <div className="playing-area w-100 ">
          <SpotifyPlayer />
          <PlayBox />
        </div>
      )}
    </div>
  );
}

export default PlayingArea;
