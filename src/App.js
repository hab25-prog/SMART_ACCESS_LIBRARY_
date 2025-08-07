import SideBar from "./sidebar";
import MainContent from "./mainContent";
import "./App.css";
import { useState } from "react";
import Upload from "./upload";
import LoginForm from "./loginForm";

export default function App() {
  const [page, setPages] = useState("main");
  const [isLogin, setIsLogin] = useState(false);
  function nav(txt) {
    setPages(txt);
  }
  function handlLogin() {
    setIsLogin(!isLogin);
  }
  return (
    <div className="container">
      <SideBar nav={nav} isLogin={isLogin} />

      {isLogin ? (
        page === "upload" ? (
          <Upload handlLogin={handlLogin} />
        ) : (
          <MainContent />
        )
      ) : (
        <LoginForm handlLogin={handlLogin} />
      )}
    </div>
  );
}
