import React from "react";

function EncounterGenerator() {
  function queryFates() {
    console.log("the fates are thinking");
  }

  return (
    <div className="generator">
      <div className="encounter"></div>
      <button className="generate-button" onClick={queryFates()}>
        <span>Query the Fates</span>
      </button>
    </div>
  );
}

export default EncounterGenerator;
