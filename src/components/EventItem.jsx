import React from "react";

function EventItem(props) {
  return (
    <div>
      <li
        style={{
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <div>{props.text}</div>

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

export default EventItem;
