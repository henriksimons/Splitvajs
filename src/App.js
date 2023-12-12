import { useState } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import ExpenseList from "./components/ExpenseList";
import ResultBoard from "./components/ResultBoard";

const App = () => {
  const [expenseObj, setExpenseObj] = useState({
    list: [], // List of expense items
    repaymentHenrik: 0,
    repaymentIda: 0,
  });

  const addExpense = (expenseItem) => {
    const newList = [...expenseObj.list, expenseItem];

    const newExpenseObj = {
      list: newList,
      repaymentHenrik: getRepayment("Henrik", newList),
      repaymentIda: getRepayment("Ida", newList),
    };

    setExpenseObj(newExpenseObj);
    console.log(expenseObj);
  };

  const getRepayment = (person, listOfExpenseItems) => {
    return listOfExpenseItems
      .filter((e) => e.person === person)
      .map((e) => e.cost * e.repayment)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  };

  const clear = (e) => {
    setExpenseObj({
      list: [],
      repaymentHenrik: 0,
      repaymentIda: 0,
    });
  };

  const removeItem = (expenseItem) => {
    const updatedList = expenseObj.list.filter((e) => !equals(e, expenseItem));
    setExpenseObj({
      list: updatedList,
      repaymentHenrik: getRepayment("Henrik", updatedList),
      repaymentIda: getRepayment("Ida", updatedList),
    });
  };

  const equals = (e1, e2) => {
    return e1.id === e2.id;
  };

  return (
    <>
      <div className="container">
        <InputForm onExpenseSubmit={addExpense}></InputForm>
        <hr></hr>
        <ResultBoard
          repaymentHenrik={expenseObj.repaymentHenrik}
          repaymentIda={expenseObj.repaymentIda}
        ></ResultBoard>
        <hr></hr>
        <ExpenseList
          listOfExpenses={expenseObj.list}
          onItemRemoval={removeItem}
        ></ExpenseList>
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
