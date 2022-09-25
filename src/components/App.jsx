import React, { useState } from "react";
import icon from "./d20-icon.png";
import Subject from "./Subject.jsx";
import Event from "./Event.jsx";
import EncounterObject from "./EncounterObject.jsx";
import LootTable from "./LootTable.jsx";

function App() {
  //state management
  //app
  const [encounterString, setEncounterString] = useState("");
  const [pilferedLoot, setPilferedLoot] = useState("");
  const [selectRarity, setSelectRarity] = useState("common");
  //subjects
  const [subjects, setSubjects] = useState([
    "The party",
    "The party's barbarian",
    "The party's bard",
    "A nearby village"
  ]);
  //events
  const [events, setEvents] = useState([
    "is ambushed by",
    "discovers",
    "hears a cry for help from",
    "is offered a deal by"
  ]);
  //objects
  const [objects, setObjects] = useState([
    "the Emperor's Executioners",
    "a band of trolls",
    "a merchant caravan",
    "a mysterious cave"
  ]);
  //loot
  const [loot, setLoot] = useState([
    {
      text: "a piece of wool",
      rarity: "common"
    },
    {
      text: "2x rations",
      rarity: "common"
    },
    {
      text: "10gp",
      rarity: "uncommon"
    },
    {
      text: "a minor potion of healing",
      rarity: "uncommon"
    },
    {
      text: "a silver throwing axe",
      rarity: "rare"
    },
    {
      text: "a steel buckler",
      rarity: "rare"
    },
    {
      text: "50 gp",
      rarity: "rare"
    },
    {
      text: "a dragon's egg",
      rarity: "legendary"
    },
    {
      text: "a letter from the king",
      rarity: "legendary"
    }
  ]);

  //functions
  function queryFates() {
    var subjectSelector = Math.floor(Math.random() * subjects.length);
    var eventSelector = Math.floor(Math.random() * events.length);
    var objectSelector = Math.floor(Math.random() * objects.length);
    setEncounterString(() => {
      return (
        subjects[subjectSelector] +
        " " +
        events[eventSelector] +
        " " +
        objects[objectSelector] +
        "!"
      );
    });
  }

  function handleSelectRarity(event) {
    const selectedRarity = event.target.value;
    setSelectRarity(selectedRarity);
  }

  function pilfer() {
    var lootPool = loot.filter((loot) => loot.rarity === selectRarity);
    var lootSelector = Math.floor(Math.random() * lootPool.length);
    setPilferedLoot(
      lootPool[lootSelector].text + " (" + lootPool[lootSelector].rarity + ")"
    );
  }

  //visual
  return (
    <div>
      <div className="head-ribbon">
        <div className="head-text">
          <h1>Query the Fates</h1>
          <h3>A DnD Homonculus</h3>
        </div>
        <img src={icon} alt="d20-icon" />
      </div>
      <div>
        <div className="generator">
          <div className="encounter">{encounterString}</div>
          <button className="generate-button" onClick={() => queryFates()}>
            <span>Query the Fates!</span>
          </button>
        </div>
      </div>
      <div className="notecard">
        <Subject subjects={subjects} setSubjects={setSubjects} />
        <Event events={events} setEvents={setEvents} />
        <EncounterObject objects={objects} setObjects={setObjects} />
      </div>
      <div className="notecard">
        <div className="loot-selector">
          <div className="heading">
            <h1>Generate Loot</h1>
          </div>
          <div>{pilferedLoot}</div>
          <select
            name="selectLootRarity"
            id="selectLootRarity"
            onChange={handleSelectRarity}
          >
            <option value="common">Common</option>
            <option value="uncommon">Uncommon</option>
            <option value="rare">Rare</option>
            <option value="legendary">Legendary</option>
          </select>
          <button className="generate-button" onClick={() => pilfer()}>
            <span>Pilfer!</span>
          </button>
        </div>
        <LootTable loot={loot} setLoot={setLoot} />
      </div>
    </div>
  );
}

export default App;
