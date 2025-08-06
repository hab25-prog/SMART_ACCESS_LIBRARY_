import React from "react";
import {
  FaFolderOpen,
  FaCogs,
  FaHome,
  FaUpload,
  FaUserCog,
} from "react-icons/fa";

export default function SideBar({ nav }) {
  return (
    <div className="sidebar">
      <h1 className="logo">SMART ACCESS</h1>
      <ul>
        <li onClick={() => nav("main")}>
          <FaHome className="icon" /> Home
        </li>
        <li onClick={() => nav("upload")}>
          <FaUpload className="icon" /> Upload
        </li>
        <li onClick={() => nav("browser")}>
          <FaFolderOpen className="icon" /> Browse
        </li>
        <li onClick={() => nav("setting")}>
          <FaCogs className="icon" /> Settings
        </li>
        <li onClick={() => nav("manage")}>
          <FaUserCog className="icon" /> Manage Users
        </li>
      </ul>
    </div>
  );
}
