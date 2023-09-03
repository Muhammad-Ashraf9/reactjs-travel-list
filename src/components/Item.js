import { useState } from "react";

export default function Item({ item, onDeleteItem, onPackItem }) {
  return (
    <li>
      <input type="checkbox" onChange={() => onPackItem(item.id)} />
      <p style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} &ndash;
        <span> {item.description}</span>
      </p>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
