import { styles } from "./ExpenseList.css";

const ExpenseList = (props) => {
  const expensesByCost = props.listOfExpenses.sort((a, b) => a.cost - b.cost);
  const expensesByName = props.listOfExpenses.sort((a, b) => {
    const n1 = a.cost;
    const n2 = b.cost;
    if (n1 < n2) {
      return -1;
    }
    if (n1 > n2) {
      return 1;
    }
    return 0;
  });

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
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {props.listOfExpenses.map((e) => {
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
                          onClick={(event) => props.onItemRemoval(e)}
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
