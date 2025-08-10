import React, { useState, useEffect } from "react";
import Content from "./content";

const temp = [
  {
    title: "grade 10 TXT Booke",
    author: "gov",
    image: null,
  },
  {
    title: "grade 9 TXT Booke",
    author: "gov",
    image: null,
  },
  {
    title: "ppt of kenematics",
    author: "mr habtamu",
    image: null,
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
          className="search-bar search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="icon-button"
          aria-label="Select language"
          onClick={() => setLanguage(language === "en" ? "am" : "en")}
        >
          🌐
        </button>
        <button className="icon-button" aria-label="User profile">
          👤
        </button>
      </div>

      <h1 className="welcome-header">
        {language === "en" ? "Welcome to SmartAccess" : "ሰላም እንኳን ደህና መጣህ"}
      </h1>

      {/* Recently Uploaded Grid Section */}
      <section>
        <h2 className="section-title">Recently Uploaded</h2>
        <div className="card-grid">
          {filteredBooks.slice(0, 8).map((book, index) => (
            <Content key={book.id || index} book={book} />
          ))}
        </div>
      </section>

      {/* Suggested For You Grid Section */}
      <section>
        <h2 className="section-title">Suggested for You</h2>
        <div className="card-grid">
          {filteredBooks.slice(0, 8).map((book, index) => (
            <Content key={book.id || index} book={book} />
          ))}
        </div>
      </section>
    </main>
  );
}
