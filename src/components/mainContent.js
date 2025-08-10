import React, { useState, useEffect } from "react";
import Content from "./content";

const temp = [
  {
    title: "grade 10 TXT Booke",
    autor: "gov",
  },
  {
    title: "grade 9 TXT Booke",
    author: "gov",
  },
  {
    title: "ppt of kenematics",
    author: "mr habtamu",
  },
];

export default function MainContent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    fetch("https://www.dbooks.org/api/recent")
      .then((res) => res.json())
      .then((data) => setBooks(data.books))
      .catch((err) => {
        if (err) setBooks(temp);
      });
  }, []);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="main-content-wrapper">
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search..."
          aria-label="Search books"
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="icon-button"
          aria-label="Select language"
          onClick={() => {
            if (language === "en") setLanguage("am");
            if (language === "am") setLanguage("en");
          }}
        >
          🌐
        </button>
        <button className="icon-button" aria-label="User profile">
          👤
        </button>
      </div>

      <h1 className="welcome-header">
        {language === "en" ? "Welcome to SmartAccess" : "እንክዋን በደህና መጡ"}
      </h1>

      <section>
        <h2 className="section-title">Recently Uploaded</h2>
        <div className="card-grid">
          {filteredBooks.slice(0, 8).map((book, index) => (
            <Content key={book.id || index} book={book} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">Suggested for You</h2>
        <div className="card-grid flex">
          {filteredBooks.slice(0, 8).map((book, index) => (
            <Content key={book.id || index} book={book} />
          ))}
        </div>
      </section>
    </main>
  );
}
