import React from "react";
import {
  FaFolderOpen,
  FaCogs,
  FaHome,
  FaUpload,
  FaUserCog,
  FaHeart,
} from "react-icons/fa";

export default function SideBar({ nav, active }) {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <svg
          className="logo-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="#4A90E2"
        >
          <path d="M4 3h16v18H4z" fill="#63B3ED" />
          <path d="M4 12h8v9H4z" fill="#4299E1" />
        </svg>
        <h1 className="logo-text">SmartAccess</h1>
      </div>
      <ul>
        <li
          className={active === "main" ? "active" : ""}
          onClick={() => nav("main")}
        >
          <FaHome className="icon" /> Home
        </li>
        <li
          className={active === "upload" ? "active" : ""}
          onClick={() => nav("upload")}
        >
          <FaUpload className="icon" /> Upload
        </li>
        <li
          className={active === "browser" ? "active" : ""}
          onClick={() => nav("browser")}
        >
          <FaFolderOpen className="icon" />
          Browse
        </li>
        <li
          className={active === "favorites" ? "active" : ""}
          onClick={() => nav("favorites")}
        >
          <FaHeart className="icon" />
          Favorites
        </li>
        <li
          className={active === "manage" ? "active" : ""}
          onClick={() => nav("manage")}
        >
          <FaUserCog className="icon" />
          Manage Users
        </li>
        <li
          className={active === "setting" ? "active" : ""}
          onClick={() => nav("setting")}
        >
          <FaCogs className="icon" />
          Settings
        </li>
      </ul>
    </div>
  );
}
