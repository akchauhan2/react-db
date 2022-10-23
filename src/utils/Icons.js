import React from "react";
import { RiHome4Fill } from "react-icons/ri";
import {
  MdExplore,
  MdOutlineLibraryMusic,
  MdLibraryMusic,
} from "react-icons/md";
import { BiPodcast } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { RiArrowGoBackLine } from "react-icons/ri";
import { BsThreeDotsVertical, BsMusicNoteBeamed } from "react-icons/bs";
import { AiFillHeart, AiOutlineLike } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi";
import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import { IoIosTrash, IoMdNotificationsOutline } from "react-icons/io";

function Icons({ type, ...rest }) {
  switch (type.toLowerCase()) {
    case "home":
      return <RiHome4Fill {...rest} />;
    case "explore":
      return <MdExplore {...rest} />;
    case "library":
      return <MdLibraryMusic {...rest} />;
    case "postcasts":
      return <BiPodcast {...rest} />;
    case "recents":
      return <RiArrowGoBackLine {...rest} />;
    case "liked songs":
      return <AiOutlineLike {...rest} />;
    case "artists":
      return <HiOutlineUser {...rest} />;
    case "albums":
      return <MdOutlineLibraryMusic {...rest} />;
    case "playlist":
      return <TbPlaylist {...rest} />;
    case "add":
      return <AiOutlinePlus {...rest} />;
    case "bin":
      return <IoIosTrash {...rest} />;
    case "search":
      return <CiSearch {...rest} />;
    case "notification":
      return <IoMdNotificationsOutline {...rest} />;
    case "dots":
      return <BsThreeDotsVertical {...rest} />;
    case "music":
      return <BsMusicNoteBeamed {...rest} />;
    case "heart":
      return <AiFillHeart {...rest} />;
    default:
      return null;
  }
}

export default Icons;
