import SideBar from "./sidebar";
import MainContent from "./mainContent";
import "./App.css";
import { useState } from "react";
import Upload from "./upload";

export default function App() {
  const [page, setPages] = useState("main");
  function nav(txt) {
    setPages(txt);
  }
  return (
    <div className="container">
      <SideBar nav={nav} />
      {page === "upload" ? <Upload /> : <MainContent />}
    </div>
  );
}
