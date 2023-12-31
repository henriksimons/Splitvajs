import "./ExpenseList.css";
import { useState } from "react";

const ExpenseList = ({
  listOfExpenses,
  onItemRemoval,
}) => {
  
  const [sort, setSort] = useState("0");

  console.log("Sort :" + sort);

  const doSort = (a, b) => {
    if (sort === "1") {
      return a.cost - b.cost; //Kostnad fallande
    } else if (sort === "2") {
      return b.cost - a.cost; // Kostnad stigande
    } else if (sort === "3") {
      return compareNameAsc(a, b);
    } else if (sort === "4") {
      return compareNameDsc(a, b);
    } else return a.id - b.id;
  };

  const compareNameAsc = (a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  };

  const compareNameDsc = (a, b) => {
    if (a.name < b.name) {
      return 1;
    }
    if (a.name > b.name) {
      return -1;
    }
    return 0;
  };

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-12"></div>
          <h2>Utgiftsposter</h2>
        </div>
        <div className="row">
          <div className="col-12">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Utgift</th>
                  <th scope="col">Kostnad</th>
                  <th scope="col">Utläggare</th>
                  <th scope="col">Ersättning</th>
                  <th scope="col">Återbetalning</th>
                  <th scope="col">
                    <select
                      className="form-select form-select-sm"
                      onChange={(e) => setSort(e.target.value)}
                    >
                      <option value="0">Sortera efter</option>
                      <option value="1">Pris fallande</option>
                      <option value="2">Pris stigande</option>
                      <option value="3">Namn A-Ö</option>
                      <option value="4">Namn Ö-A</option>
                      <option value="5">Insättningsordning</option>
                    </select>
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {listOfExpenses
                  .sort((a, b) => doSort(a, b))
                  .map((e) => {
                    return (
                      <tr key={e.id}>
                        <td>{e.name}</td>
                        <td>{e.cost} kr</td>
                        <td>{e.person}</td>
                        <td>{e.repayment * 100}%</td>
                        <td>{e.cost * e.repayment} kr</td>
                        <td>
                          <button
                            type="btn"
                            className="btn btn-outline-danger"
                            onClick={(event) => onItemRemoval(e)}
                          >
                            Ta bort
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpenseList;
