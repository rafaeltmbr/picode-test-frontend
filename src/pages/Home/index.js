import React, { useState, useEffect } from "react";

import ListControls from "../../components/ListControls";
import BookCard from "../../components/BookCard";
import BookRegisterModal from "../../components/BookRegisterModal";
import DeleteModal from "../../components/DeleteModal";
import api from "../../api";

import "./styles.sass";

export default function Home() {
  const [books, setBook] = useState([]);
  const [searchByTagOnly, setSearchByTagOnly] = useState(false);
  const [searchString, setSearchString] = useState("");
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [bookIdToDelete, setBookIdToDelete] = useState(0);

  useEffect(() => {
    const request = searchByTagOnly ? `books?tag=${searchString}` : `books?search=${searchString}`;
    api
      .get(request)
      .then((res) => setBook(res.data))
      .catch(console.error.bind(console));
  }, [setBook, searchString, searchByTagOnly]);

  useEffect(() => {
    document.body.setAttribute("data-overflow", showRegisterModal ? "hidden" : "");
  }, [showRegisterModal]);

  function handleSearchByTagClick() {
    setSearchByTagOnly(!searchByTagOnly);
  }

  function handleSearchStringChange(e) {
    setSearchString(e.target.value);
  }

  function handleBookDelete(id) {
    setBookIdToDelete(id);
  }

  function handleShowRegisterModal() {
    setShowRegisterModal(true);
  }

  function handleBookRegister(newBook) {
    const request = searchByTagOnly ? `books?tag=${searchString}` : `books?search=${searchString}`;
    api
      .post("books", newBook, {
        headers: { "Content-Type": "application/json" },
      })
      .then(() => api.get(request))
      .then((res) => setBook(res.data))
      .then(() => setShowRegisterModal(false))
      .catch(console.error.bind(console));
  }

  function handleHideRegisterModal() {
    setShowRegisterModal(false);
  }

  function handleHideDeleteModal() {
    setBookIdToDelete(0);
  }

  function handleBookDeleteConfirm() {
    const request = searchByTagOnly ? `books?tag=${searchString}` : `books?search=${searchString}`;
    api
      .delete(`books/${bookIdToDelete}`)
      .then(() => api.get(request))
      .then((res) => setBook(res.data))
      .then(() => setBookIdToDelete(0))
      .catch(console.error.bind(console));
  }

  return (
    <div className="home">
      <div className="container">
        <h1>MLPR</h1>
        <h2>Melhores livros para relembrar</h2>
        <ListControls
          onSearchByTagClick={handleSearchByTagClick}
          searchByTagOnly={searchByTagOnly}
          onSearchStringChange={handleSearchStringChange}
          searchString={searchString}
          onRegister={handleShowRegisterModal}
        />
        <div className="cards-container">
          {books.map((book) => (
            <BookCard key={book.title} book={book} onDelete={handleBookDelete} />
          ))}
        </div>
      </div>
      {showRegisterModal && (
        <BookRegisterModal onCancel={handleHideRegisterModal} onRegister={handleBookRegister} />
      )}
      {bookIdToDelete ? (
        <DeleteModal onCancel={handleHideDeleteModal} onConfirm={handleBookDeleteConfirm} />
      ) : (
        <></>
      )}
    </div>
  );
}
