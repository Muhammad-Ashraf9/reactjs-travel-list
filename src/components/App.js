import { useState } from "react";
import "../index.css";
import Stats from "./Stats";
import List from "./List";
import Form from "./Form";
import Logo from "./Logo";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(description, quantity) {
    if (!description) return;

    setItems((items) => [
      ...items,
      { description, quantity, id: Date.now(), packed: false },
    ]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handlePackItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <List
        items={items}
        onDeleteItem={handleDeleteItem}
        onPackItem={handlePackItem}
        onClear={handleClearList}
      />

      <Stats items={items} />
    </div>
  );
}
