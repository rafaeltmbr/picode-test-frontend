import React from "react";

import { IoIosSearch as Search } from "react-icons/io";

import "./styles.sass";

export default function SearchBox() {
  return (
    <div className="search-box">
      <input type="text" placeholder="Buscar" />
      <Search className="search" size="1.8rem" />
    </div>
  );
}
