import React from "react";
// bg-white p-3 rounded-lg shadow hover:shadow-md transition duration-300 text-center
const Content = ({ book }) => (
  <div className="card">
    <img src={book.image} alt={book.title} className="img" />
    <h4 className="">{book.title}</h4>
    <p className="">{book.authors}</p>
  </div>
);

export default Content;
