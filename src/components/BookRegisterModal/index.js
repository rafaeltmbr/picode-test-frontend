import React, { useState } from "react";
import { AiOutlinePlus as Plus } from "react-icons/ai";

import "./styles.sass";

export default function BookRegisterModal({ onRegister = () => {}, onCancel = () => {} }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [pages, setPages] = useState(1);
  const [tags, setTags] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();

    const newBook = {
      title,
      author,
      description,
      pages,
      tags: tags.split(/\s/).filter((e) => e),
    };

    onRegister(newBook);
  }

  function handleModalClick(e) {
    if (e.target.className === "book-register-modal") onCancel();
  }

  return (
    <div className="book-register-modal" onClick={handleModalClick}>
      <form onSubmit={handleFormSubmit}>
        <header>
          <Plus className="plus" size="1.8rem" />
          <span>Adicionar novo livro</span>
        </header>
        <section className="fields">
          <label htmlFor="title">Título do livro</label>
          <input
            tabIndex="1"
            id="title"
            type="text"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />

          <label htmlFor="author">Autor</label>
          <input
            tabIndex="2"
            id="author"
            type="text"
            name="author"
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
            required
          />

          <label htmlFor="description">Descrição</label>
          <input
            tabIndex="3"
            id="description"
            type="text"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            required
          />

          <label htmlFor="pages">Páginas</label>
          <input
            tabIndex="4"
            id="pages"
            type="number"
            min="1"
            max="10000"
            name="pages"
            onChange={(e) => setPages(e.target.value)}
            value={pages}
            required
          />

          <label htmlFor="tags">tags</label>
          <input
            tabIndex="5"
            id="tags"
            type="text"
            name="tags"
            onChange={(e) => setTags(e.target.value)}
            value={tags}
          />
        </section>
        <footer>
          <div
            className="modal-button"
            tabIndex="7"
            onClick={(e) => {
              console.log("cancel clicked");
              onCancel();
            }}
          >
            Cancelar
          </div>
          <button className="modal-button" tabIndex="6">
            <Plus className="plus" size="1.5rem" />
            <span>Adicionar</span>
          </button>
        </footer>
      </form>
    </div>
  );
}
