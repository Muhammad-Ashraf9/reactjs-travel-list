import { useState } from "react";

export default function Form({ onAddItem }) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");
  function handleItemInput(e) {
    setDescription(e.target.value);
  }
  function handleAddItem(e) {
    e.preventDefault();
    onAddItem(description, quantity);
  }
  return (
    <form className="add-form">
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => {
          setQuantity(+e.target.value);
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={description}
        onChange={handleItemInput}
        placeholder="items..."
      />
      <button onClick={handleAddItem}>Add</button>
    </form>
  );
}
