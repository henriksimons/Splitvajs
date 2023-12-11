import { useState } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import ExpenseList from "./components/ExpenseList";
import ResultBoard from "./components/ResultBoard";

const emptyExpenseObj = {
  list: [], // List of expense items
  henrik: 0,
  ida: 0,
};

const App = () => {
  const [expenseObj, setExpenseObj] = useState(emptyExpenseObj);

  const addExpense = (expenseItem) => {
    const newList = [...expenseObj.list, expenseItem];

    const newExpenseObj = {
      list: newList,
      henrik: getExpensesForPerson("Henrik", newList),
      ida: getExpensesForPerson("Ida", newList),
    };

    setExpenseObj(newExpenseObj);
  };

  const getExpensesForPerson = (person, listOfExpenseItems) => {
    return listOfExpenseItems
      .filter((e) => e.person === person)
      .map((e) => e.cost * e.compensation)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  };

  const clear = (e) => {
    setExpenseObj({
      list: [],
      henrik: 0,
      ida: 0,
    });
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
