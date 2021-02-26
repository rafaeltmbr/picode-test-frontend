import React from "react";

import "./styles.sass";
import { AiOutlineCheck as Check } from "react-icons/ai";

export default function OptionCheckbox({
  label = "Procurar somente por tags",
  state = false,
  onClick = () => {},
}) {
  return (
    <div className="option-checkbox" onClick={onClick}>
      <div className="input-box">{state && <Check className="check" size="1.8rem" />}</div>
      <span className="label">{label}</span>
    </div>
  );
}
