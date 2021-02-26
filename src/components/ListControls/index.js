import React from "react";

import SearchBox from "../SearchBox";
import OptionCheckbox from "../OptionCheckbox";
import AddButton from "../AddButton";
import "./styles.sass";

export default function ListControls({
  onSearchByTagClick,
  searchByTagOnly,
  onSearchStringChange,
  searchString,
  onRegister,
}) {
  return (
    <form className="list-controls" onClick={(e) => e.preventDefault()}>
      <div className="left">
        <SearchBox onChange={onSearchStringChange} state={searchString} />
        <OptionCheckbox onClick={onSearchByTagClick} state={searchByTagOnly} />
      </div>
      <div className="right">
        <AddButton onClick={onRegister} />
      </div>
    </form>
  );
}
