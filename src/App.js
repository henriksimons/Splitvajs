import { useState } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import ExpenseList from "./components/ExpenseList";
import ResultBoard from "./components/ResultBoard";
import Header from "./components/Header";

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

  let removeButton;
  if (expenseObj.list.length > 0) {
    removeButton = (
      <button type="button" className="btn btn-danger" onClick={clear}>
        Rensa
      </button>
    );
  } else {
  }

  return (
    <>
      <div className="splitvise">
        <div className="container">
          <Header headerText="Splitvise"></Header>
          <hr></hr>
          <ResultBoard
            repaymentHenrik={expenseObj.repaymentHenrik}
            repaymentIda={expenseObj.repaymentIda}
          ></ResultBoard>
          <hr></hr>
          <InputForm onExpenseSubmit={addExpense}></InputForm>
          <ExpenseList
            listOfExpenses={expenseObj.list}
            onItemRemoval={removeItem}
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
