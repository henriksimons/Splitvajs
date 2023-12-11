const ExpenseList = (props) => {
  const expenses = props.listOfExpenses;
  return (
    <>
      <div className="mt-5">
        <h1>Utgiftsposter</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Utgift</th>
              <th scope="col">Kostnad</th>
              <th scope="col">Utläggare</th>
              <th scope="col">Ersättning</th>
              <th scope="col">Återbetalning</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((e) => {
              return (
                <tr key={e.expense + Math.random()}>
                  <td>{e.expense}</td>
                  <td>{e.cost} kr</td>
                  <td>{e.person}</td>
                  <td>{e.compensation * 100}%</td>
                  <td>{e.cost * e.compensation} kr</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ExpenseList;
