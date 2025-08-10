import React from "react";

const Content = ({ book }) => (
  <div className="card">
    <img src={book.image} alt={book.title} className="img" />
    <h4>{book.title}</h4>

    <button>borrow</button>
  </div>
);

export default Content;
