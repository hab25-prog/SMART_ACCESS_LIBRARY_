import React from "react";

const Content = ({ book }) => (
  <div className="card">
    {book.image ? (
      <img src={book.image} alt={book.title} className="img" />
    ) : (
      <div className="image-placeholder" aria-label="No image available" />
    )}
    <h4>{book.title}</h4>
    <button className="borrow-button" aria-label={`Borrow ${book.title}`}>
      borrow
    </button>
  </div>
);

export default Content;
