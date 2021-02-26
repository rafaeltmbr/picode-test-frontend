import React from "react";

import "./styles.sass";
import { AiOutlineCheck as Check } from "react-icons/ai";

export default function OptionCheckbox({ label = "Procurar somente por tags", checked = false }) {
  return (
    <div className="option-checkbox">
      <div className="input-box">{checked && <Check className="check" size="1.8rem" />}</div>
      <span className="label">{label}</span>
    </div>
  );
}
