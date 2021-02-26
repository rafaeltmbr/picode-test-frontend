import React from "react";

import SearchBox from "../SearchBox";
import OptionCheckbox from "../OptionCheckbox";
import AddButton from "../AddButton";
import "./styles.sass";

export default function ListControls() {
  return (
    <form className="list-controls">
      <div className="left">
        <SearchBox />
        <OptionCheckbox />
      </div>
      <div className="right">
        <AddButton />
      </div>
    </form>
  );
}
