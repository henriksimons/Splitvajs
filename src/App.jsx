import { useState } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import ExpenseList from "./components/ExpenseList";
import ResultBoard from "./components/ResultBoard";
import Header from "./components/Header";

const App = () => {
  const [sortBy, setSortBy] = useState("0");
  const [balance, setBalance] = useState({
    list: [], // List of expense items
    repaymentHenrik: 0,
    repaymentIda: 0,
    totalHenrik: 0,
    totalIda: 0,
  });

  const addExpense = (expenseEvent) => {
    const newList = [...balance.list, expenseEvent];

    const updatedBalance = {
      list: newList,
      repaymentHenrik: getRepayment("Henrik", newList),
      repaymentIda: getRepayment("Ida", newList),
      totalHenrik: getTotal("Henrik", newList),
      totalIda: getTotal("Ida", newList),
    };

    setBalance(updatedBalance);
  };

  const handleSortBy = (e) => {
    console.log("SortBy change registered in App.jsx: " + e.target.value);
    setSortBy(e.target.value);
  };

  const getRepayment = (person, list) => {
    return list
      .filter((e) => e.person === person)
      .map((e) => e.cost * e.repayment)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0.0);
  };

  const getTotal = (person, list) => {
    return list
      .filter((e) => e.person === person)
      .map((e) => e.cost * 1)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0.0);
  };

  const clear = (e) => {
    setBalance({
      list: [],
      repaymentHenrik: 0,
      totalHenrik: 0,
      repaymentIda: 0,
      totalIda: 0,
    });
  };

  const removeItem = (expenseEvent) => {
    const updatedList = balance.list.filter((e) => e.id !== expenseEvent.id);
    setBalance({
      list: updatedList,
      repaymentHenrik: getRepayment("Henrik", updatedList),
      repaymentIda: getRepayment("Ida", updatedList),
      totalHenrik: getTotal("Henrik", updatedList),
      totalIda: getTotal("Ida", updatedList),
    });
  };

  let removeButton;
  if (balance.list.length > 0) {
    removeButton = (
      <button type="button" className="remove-btn" onClick={clear}>
        Rensa
      </button>
    );
  } else {
  }

  return (
    <>
      <div className="splitvise">
        <div className="container">
          <Header headerText="Splitvajs"></Header>
          <hr></hr>
          <ResultBoard
            repaymentHenrik={balance.repaymentHenrik}
            repaymentIda={balance.repaymentIda}
            totalHenrik={balance.totalHenrik}
            totalIda={balance.totalIda}
          ></ResultBoard>
          <hr></hr>
          <InputForm onExpenseSubmit={addExpense}></InputForm>
          <ExpenseList
            handleSortBy={handleSortBy}
            listOfExpenses={balance.list}
            onItemRemoval={removeItem}
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
