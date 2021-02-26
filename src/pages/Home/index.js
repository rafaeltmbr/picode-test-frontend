import React from "react";

import ListControls from "../../components/ListControls";
import BookCard from "../../components/BookCard";

import "./styles.sass";

const books = [
  {
    id: 1,
    title: "Uma breve história do tempo",
    author: "Stephen Hawking",
    description: "Hawking e sua descoberta sobre o universo.",
    pages: 256,
    tags: ["science"],
  },
  {
    id: 2,
    title: "Harry Potter e a Pedra Filosofal",
    author: "J. K. Rowling",
    description: "Relata o primeiro ano de Harry na escola Hogwarts.",
    pages: 208,
    tags: ["fiction", "fantasy"],
  },
  {
    id: 3,
    title: "Jogos Vorazes",
    author: "Suzanne Collins",
    description: "Um reality show onde o ultimo sobrevivente vence",
    pages: 400,
    tags: ["fantasy", "fiction"],
  },
];

export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <h1>MLPR</h1>
        <h2>Melhores livros para relembrar</h2>
        <ListControls />
        <div className="cards-container">
          {books.map((book) => (
            <BookCard book={book} />
          ))}
        </div>
      </div>
    </div>
  );
}
