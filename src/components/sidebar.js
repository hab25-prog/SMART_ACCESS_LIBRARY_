import React from "react";
import { useState, useEffect } from "react";
/*import { useState, useEffect } from "react";

function useScreenSize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}
*/

import {
  FaFolderOpen,
  FaCogs,
  FaHome,
  FaUpload,
  FaUserCog,
  FaHeart,
  FaSignInAlt,
} from "react-icons/fa";
import image from "../asset/logo.png";

export default function SideBar({ nav, isLogin, active }) {
  const screenWidth = useScreenSize();
  const isMobile = screenWidth <= 768;

  return (
    <div className="sidebar">
      {isMobile && (
        <button className="drawer" onClick={() => console.log("clicked")}>
          ☰ Menu
        </button>
      )}
      <div>
        <div className="logo-container">
          <img src={image} alt="LOGO" className="logo" />
        </div>
        <SideBarList nav={nav} isLogin={isLogin} active={active} />
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

function SideBarList({ nav, isLogin, active }) {
  return (
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
  );
}

function useScreenSize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}
