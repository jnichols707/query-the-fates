import React, { useState } from "react";
import LootItem from "./LootItem";

function LootTable(props) {
  const [inputText, setInputText] = useState("");
  const [inputRarity, setInputRarity] = useState("common");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function handleRarityChange(event) {
    const newRarity = event.target.value;
    setInputRarity(newRarity);
  }

  function addItem() {
    props.setLoot((prevItems) => {
      return [
        ...prevItems,
        {
          text: inputText,
          rarity: inputRarity
        }
      ];
    });
    setInputText("");
  }

  function deleteItem(id) {
    props.setLoot((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>Loot Table </h1>
      </div>
      <div className="form">
        <input
          onChange={handleChange}
          type="text"
          value={inputText}
          placeholder="Item Description"
        />
        <select name="lootRarity" id="lootRarity" onChange={handleRarityChange}>
          <option value="common">Common</option>
          <option value="uncommon">Uncommon</option>
          <option value="rare">Rare</option>
          <option value="legendary">Legendary</option>
        </select>
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {props.loot.map((lootItem, index) => (
            <LootItem
              key={index}
              id={index}
              text={lootItem.text}
              rarity={lootItem.rarity}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LootTable;
