import React from "react";
import { playlistItems, sidebarItems } from "../dummy/sidebarItems";

import Logo from "./Logo";
import SidebarContent from "./SidebarContent";
function Sidebar() {
  const [sidebar, setSidebar] = React.useState(sidebarItems);
  const [playlists, setPlaylists] = React.useState(playlistItems);
  const handleClick = (name, playlist) => {
    setSidebar((prev) =>
      prev.map((item) => {
        if (!playlist) {
          return {
            ...item,
            items: item.items.map((item) => ({
              ...item,
              isActive: item.name === name,
            })),
          };
        }
        return item;
      })
    );
  };
  const playlist = (name, playlist) => {
    setPlaylists((prev) => prev.filter((p) => p.name !== name));
  };
  return (
    <div className="bg sidebar">
      <div className="sidebar-logo">
        <Logo />
      </div>
      <div className="sidebar-items">
        {sidebar.map(({ header, items }) => (
          <SidebarContent
            handleClick={handleClick}
            header={header}
            items={items}
          />
        ))}
        <SidebarContent
          header={{ title: "PLAYLISTS" }}
          items={playlists}
          handleClick={playlist}
          playlist
        />
      </div>
    </div>
  );
}

export default Sidebar;
