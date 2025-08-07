import React, { useState, useEffect } from "react";
import Content from "./content";

export default function MainContent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://www.dbooks.org/api/recent")
      .then((res) => res.json())
      .then((data) => setBooks(data.books))
      .catch((err) => console.error("Failed to load books:", err));
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
        <button className="icon-button" aria-label="Select language">
          🌐
        </button>
        <button className="icon-button" aria-label="User profile">
          👤
        </button>
      </div>

      <h1 className="welcome-header">Welcome to SmartAccess</h1>

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
