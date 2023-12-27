import { useState, useEffect } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import ExpenseList from "./components/ExpenseList";
import ResultBoard from "./components/ResultBoard";
import Header from "./components/Header";

// TODO lägg till det fejkade itemet till listan för att undvika fördröjning.

const App = () => {
  const [sortBy, setSortBy] = useState("0");

  const [addedItems, setAddedItems] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://splitvajs.fly.dev/v2/expenses")
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [addedItems]);

  const addItem = (item) => {
    setAddedItems([...addedItems, item]);
  };

  const handleSortBy = (e) => {
    setSortBy(e.target.value);
  };

  let removeButton;
  if (items.length > 0) {
    removeButton = (
      <button type="button" className="remove-btn">
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
          <ResultBoard></ResultBoard>
          <hr></hr>
          <InputForm onFormSubmit={addItem}></InputForm>
          <ExpenseList
            items={items}
            handleSortBy={handleSortBy}
            sortBy={sortBy}
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
