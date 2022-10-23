import React from "react";
import Icons from "../utils/Icons";

function SidebarContent({ header, items, playlist, handleClick }) {
  console.log(items);
  return (
    <div key={header.title} className="sidebar-item">
      <div className="sidebar-item-header">
        <span>{header.title}</span>
        {playlist && (
          <Icons
            type={"add"}
            style={{ fontSize: "1.3em" }}
            className="sidebar-playlist-item-icon"
          />
        )}
      </div>
      <div className="sidebar-item-content">
        <ul className="sidebar-content-list">
          {items.map(({ name, isActive }) => (
            <li
              onClick={() => handleClick(name, playlist)}
              key={name}
              className={`sidebar-content-item  ${isActive && "active"}`}
            >
              <div className="sidebar-content-icon">
                <Icons
                  type={playlist ? "playlist" : name}
                  style={{ fontSize: "1.6em" }}
                  className="sidebar-item-icon"
                />
              </div>
              <div className="sidebar-content-text">
                <span>{name}</span>
                {playlist && (
                  <Icons
                    style={{ fontSize: "1.3em" }}
                    type={"bin"}
                    className="sidebar-playlist-item-icon"
                  />
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SidebarContent;
