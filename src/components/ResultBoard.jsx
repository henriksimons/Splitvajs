import { useState, useEffect } from "react";
import "./ResultBoard.css";

const ResultBoard = ({ onRefresh }) => {
  const url = "https://splitvajs.fly.dev/result";
  const [result, setResult] = useState([]);

  const updateResult = () => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setResult(json));
  };

  useEffect(() => {
    updateResult();
  }, [onRefresh]);

  return (
    <div className="container">
      <div className="row">
        <h2>Resultat</h2>
      </div>
      {result.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">
                <h5>Namn</h5>
              </th>
              <th scope="col">
                <h5>Utgifter</h5>
              </th>
              <th scope="col">
                <h5>Skuld</h5>
              </th>
              <th scope="col">
                <h5>Resultat</h5>
              </th>
            </tr>
          </thead>
          <tbody>
            {result.map((result) => {
              return (
                <tr key={result.personId}>
                  <td>{result.personName}</td>
                  <td>{result.totalExpenses} kr</td>
                  <td>{result.totalDebt} kr</td>
                  <td>{result.balance} kr</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div className="row">
          <div className="text-center fw-semibold my-2">
            Inget resultat ännu
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultBoard;
