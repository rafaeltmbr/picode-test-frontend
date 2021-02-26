import React from "react";

import "./styles.sass";

export default function BookCard({ book = {} }) {
  return (
    <div className="book-card">
      <div className="top">
        <div className="left">
          <h1>{book.title || ""}</h1>
          <div className="details">
            <span className="author">{book.author || ""}</span>
            <span className="author-page-separator">-</span>
            <span className="pages">{book.pages || 0} páginas</span>
          </div>
        </div>
        <div className="right">
          <button>remover</button>
        </div>
      </div>
      <div className="description">{`"${book.description || ""}"`}</div>
      <ul className="tags">
        {book.tags && Array.isArray(book.tags) && book.tags.map((tag) => <li key={tag}>#{tag}</li>)}
      </ul>
    </div>
  );
}
