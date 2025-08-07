import React from "react";
import {
  FaFolderOpen,
  FaCogs,
  FaHome,
  FaUpload,
  FaUserCog,
  FaHeart,
  FaSignInAlt,
} from "react-icons/fa";

export default function SideBar({ nav, isLogin, active }) {
  return (
    <div className="sidebar">
      <div>
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
            className={`${isLogin ? "hidden" : ""} ${
              active === "login_tab" ? "active" : ""
            }`}
            onClick={() => nav("login_tab")}
          >
            <FaSignInAlt className="icon" /> SIGN IN
          </li>
          <li
            className={`${active === "upload" ? "active" : ""} ${
              isLogin ? "" : "hidden"
            }`}
            onClick={() => nav("upload")}
          >
            <FaUpload className="icon" /> Upload
          </li>
          <li
            className={`${active === "browser" ? "active" : ""} ${
              isLogin ? "" : "hidden"
            }`}
            onClick={() => nav("browser")}
          >
            <FaFolderOpen className="icon" />
            Browse
          </li>
          <li
            className={`${active === "favorites" ? "active" : ""} ${
              isLogin ? "" : "hidden"
            }`}
            onClick={() => nav("favorites")}
          >
            <FaHeart className="icon" />
            Favorites
          </li>
          <li
            className={`${active === "manage" ? "active" : ""} ${
              isLogin ? "" : "hidden"
            }`}
            onClick={() => nav("manage")}
          >
            <FaUserCog className="icon" />
            Manage Users
          </li>
          <li
            className={`${isLogin ? "" : "hidden"} ${
              active === "setting" ? "active" : ""
            }`}
            onClick={() => nav("setting")}
          >
            <FaCogs className="icon" />
            Settings
          </li>
        </ul>
      </div>
      <div className={`user-info ${isLogin ? "" : "hidden"}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="user-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 15.75a4.5 4.5 0 10-7.5 0M12 12a7.5 7.5 0 00-7.5 7.5h15A7.5 7.5 0 0012 12z"
          />
        </svg>
        <div>
          <div className="user-name">John Doe</div>
          <div className="user-role">Literian</div>
        </div>
      </div>
    </div>
  );
}
