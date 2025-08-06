import React, { useState, useEffect } from "react";
import Content from "./content"; // Make sure this path matches your file structure
// grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6
const MainContent = () => {
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
    <main className="scrolle">
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search book titles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
      </div>

      {/* Recently Uploaded Section */}
      <section className="">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Recently Uploaded
        </h2>
        <div className="main-content flex">
          {filteredBooks.slice(0, 8).map((book, index) => (
            <Content key={book.id || index} book={book} />
          ))}
        </div>
      </section>

      {/* Suggested for You Section */}
      <section className="">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Suggested for You
        </h2>
        <div className="main-content flex">
          {filteredBooks.slice(8, 16).map((book, index) => (
            <Content key={book.id || index} book={book} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default MainContent;
