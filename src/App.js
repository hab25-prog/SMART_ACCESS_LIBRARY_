import SideBar from "./components/sidebar";
import MainContent from "./components/mainContent";
import "./App.css";
import { useState } from "react";
import Upload from "./components/upload";
import LoginForm from "./components/loginForm";

export default function App() {
  const [page, setPages] = useState("main");
  const [_isLogin, setIsLogin] = useState(false);
  function nav(txt) {
    setPages(txt);
  }
  function handlLogin() {
    setIsLogin(!_isLogin);
    setPages("main");
  }
  return (
    <div className="container">
      <SideBar nav={nav} isLogin={_isLogin} />
      {page === "login_tab" && !_isLogin && (
        <LoginForm handlLogin={handlLogin} />
      )}
      {page === "upload" && <Upload handlLogin={handlLogin} />}

      {page === "main" && <MainContent />}
    </div>
  );
}
