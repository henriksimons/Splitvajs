import { useState } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import ExpenseList from "./components/ExpenseList";
import ResultBoard from "./components/ResultBoard";

const expenseItem = {
  list: [],
  henrik: 0,
  ida: 0,
};

const App = () => {
  const [expenseObj, setExpenseObj] = useState(expenseItem);

  const addExpense = (expense) => {
    const newItem = {
      list: [...expenseObj.list, expense],
      henrik: getExpensesForHenrik([...expenseObj.list, expense]),
      ida: getExpensesForIda([...expenseObj.list, expense]),
    };

    setExpenseObj(newItem);
  };

  const getExpensesForHenrik = (expenses) => {
    return expenses
      .filter((e) => e.person === "Henrik")
      .map((e) => e.cost * e.compensation)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  };

  const getExpensesForIda = (expenses) => {
    return expenses
      .filter((e) => e.person === "Ida")
      .map((e) => e.cost * e.compensation)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  };

  const clear = (e) => {
    const clearedItem = {
      list: [],
      henrik: 0,
      ida: 0,
    };

    setExpenseObj(clearedItem);
  };

  return (
    <>
      <div className="container">
        <InputForm onExpenseSubmit={addExpense}></InputForm>
        <hr></hr>
        <ResultBoard
          henrikRepayment={expenseObj.henrik}
          idaRepayment={expenseObj.ida}
        ></ResultBoard>
        <hr></hr>
        <ExpenseList listOfExpenses={expenseObj.list}></ExpenseList>
        <div className="row">
          <div className="col-12">
            <button type="button" className="btn btn-danger" onClick={clear}>
              Rensa
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
