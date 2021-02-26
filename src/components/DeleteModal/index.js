import React from "react";

import "./styles.sass";

export default function DeleteModal({ onCancel = () => {}, onConfirm = () => {} }) {
  function handleModalClick(e) {
    if (e.target.className === "delete-modal") onCancel();
  }

  return (
    <div className="delete-modal" onClick={handleModalClick}>
      <div className="wrapper">
        <h1>Deseja realemente remover o livro?</h1>
        <div>
          <button onClick={onCancel}>Cancelar</button>
          <button onClick={onConfirm}>Sim, remover</button>
        </div>
      </div>
    </div>
  );
}
