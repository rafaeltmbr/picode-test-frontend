import React from "react";
import { AiOutlinePlus as Plus } from "react-icons/ai";

import "./styles.sass";

export default function AddButton() {
  return (
    <button className="add-button">
      <Plus className="plus" size="1.5rem" />
      <span>Adicionar</span>
    </button>
  );
}
