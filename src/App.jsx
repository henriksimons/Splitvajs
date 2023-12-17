import { useState } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import ExpenseList from "./components/ExpenseList";
import ResultBoard from "./components/ResultBoard";
import Header from "./components/Header";

const App = () => {
  const [balance, setBalance] = useState({
    list: [], // List of expense items
    repaymentHenrik: 0,
    totalHenrik: 0,
    repaymentIda: 0,
    totalIda: 0,
  });

  const addExpense = (expenseEvent) => {
    const newList = [...balance.list, expenseEvent];

    const updatedBalance = {
      list: newList,
      repaymentHenrik: getRepayment("Henrik", newList),
      totalHenrik: getTotal("Henrik", newList),
      repaymentIda: getRepayment("Ida", newList),
      totalIda: getTotal("Ida", newList),
    };

    setBalance(updatedBalance);
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
    console.log(expenseEvent)
    const updatedList = balance.list.filter((e) => e.id !== expenseEvent.id);

    console.log(updatedList);
    setBalance({
      list: updatedList,
      repaymentHenrik: getRepayment("Henrik", updatedList),
      totalHenrik: getTotal("Henrik", updatedList),
      repaymentIda: getRepayment("Ida", updatedList),
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
          <Header headerText="Splitvise"></Header>
          <hr></hr>
          <ResultBoard
            repaymentHenrik={balance.repaymentHenrik}
            totalHenrik={balance.totalHenrik}
            repaymentIda={balance.repaymentIda}
            totalIda={balance.totalIda}
          ></ResultBoard>
          <hr></hr>
          <InputForm onExpenseSubmit={addExpense}></InputForm>
          <ExpenseList
            listOfExpenses={balance.list}
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
