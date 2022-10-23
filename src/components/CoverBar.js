import React from "react";
import Icons from "../utils/Icons";

function CoverBar() {
  return (
    <div className="cover-bar">
      <div className="coverbar-content">
        <div className="coverbar-content-header">
          <div className="coverbar-nav">
            <span className="color-1">Home/ </span>
            <span className="color-3">popular Artists</span>
          </div>
          <div className="coverbar-dots">
            <Icons type="dots" style={{ fontSize: "1.3em", color: "#fff" }} />
          </div>
        </div>
        <div className="coverbar-content-footer color-1">
          <div className="coverbar-footer-details">
            <div className="coverbar-heading">ARTIST</div>
            <div className="coverbar-name">Rema</div>
            <div className="coverbar-details">
              <Icons
                type={"music"}
                style={{ fontSize: "1em", color: "#fff" }}
              />
              2 Million Monthly Listeners
            </div>
          </div>
          <div className="coverbar-footer-action">
            <button className="coverbar-listen-now">Listen Now</button>
            <span className="coverbar-heart">
              <Icons
                type={"heart"}
                style={{ fontSize: "1.5em", color: "#fff" }}
              />
            </span>
          </div>
        </div>
      </div>
      <div className="coverbar-bg"></div>
    </div>
  );
}

export default CoverBar;
