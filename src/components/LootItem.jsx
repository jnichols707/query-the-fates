import React, { useState } from "react";

function LootItem(props) {
  return (
    <div>
      <li
        style={{
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <div>{props.text + " (" + props.rarity + ")"}</div>
        <button
          style={{ marginLeft: "15px" }}
          onClick={() => {
            props.onChecked(props.id);
          }}
        >
          <span>Delete</span>
        </button>
      </li>
    </div>
  );
}

export default LootItem;
