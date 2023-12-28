import { useState, useEffect } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import ExpenseList from "./components/ExpenseList";
import ResultBoard from "./components/ResultBoard";
import Header from "./components/Header";
import { executeDeleteRequest } from "./HttpClient";

// TODO lägg till det fejkade itemet till listan för att undvika fördröjning.

const App = () => {
  const [sortBy, setSortBy] = useState("0");

  const [addedItems, setAddedItems] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://splitvajs.fly.dev/expenses")
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [addedItems]);

  const addItem = (item) => {
    setAddedItems([...addedItems, item]);
  };

  const handleSortBy = (e) => {
    setSortBy(e.target.value);
  };

  const remove = () => {
    executeDeleteRequest("https://splitvajs.fly.dev/expenses");
    setAddedItems([]);
  };

  const removeById = (id) => {
    const url = "https://splitvajs.fly.dev/expenses/" + id;
    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.text())
      .then((json) => setAddedItems([...addedItems, json]));
  };

  let removeButton;
  if (items.length > 0) {
    removeButton = (
      <button type="button" className="remove-btn" onClick={remove}>
        Rensa
      </button>
    );
  }

  return (
    <>
      <div className="splitvise">
        <div className="container">
          <Header headerText="Splitvajs"></Header>
          <hr></hr>
          <ResultBoard onRefresh={addedItems}></ResultBoard>
          <InputForm onFormSubmit={addItem}></InputForm>
          <ExpenseList
            items={items}
            handleSortBy={handleSortBy}
            sortBy={sortBy}
            onRemoval={removeById}
          ></ExpenseList>
          <div className="row">
            <div className="col-12 text-center">{removeButton}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
