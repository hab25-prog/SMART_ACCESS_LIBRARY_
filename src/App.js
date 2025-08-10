import SideBar from "./components/sidebar";
import MainContent from "./components/mainContent";
import Upload from "./components/upload";
import LoginForm from "./components/loginForm";
// import PdfReader from "./components/reader";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [page, setPages] = useState("main");
  const [_isLogin, setIsLogin] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  function nav(txt) {
    setPages(txt);
    setDrawerOpen(false); // close drawer after nav on mobile
  }

  function handlLogin() {
    setIsLogin(true);
    setPages("main");
  }

  return (
    <div className="container">
      {/* Mobile drawer toggle button */}
      <button
        className="drawer-toggle"
        aria-label={drawerOpen ? "Close menu" : "Open menu"}
        aria-expanded={drawerOpen}
        onClick={() => setDrawerOpen(!drawerOpen)}
      >
        &#9776;
      </button>

      <SideBar
        nav={nav}
        isLogin={_isLogin}
        active={page}
        drawerOpen={drawerOpen}
      />

      {page === "login_tab" && !_isLogin && (
        <LoginForm handlLogin={handlLogin} />
      )}
      {page === "upload" && _isLogin && <Upload handlLogin={handlLogin} />}
      {page === "main" && <MainContent nav={nav} />}
      {/* {page === "pdf_reader" && <PdfReader file={samplePDF} />} */}
    </div>
  );
}
