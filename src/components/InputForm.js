import { useState } from "react";

const InputForm = (props) => {
  const [person, setPerson] = useState("");
  const [cost, setCost] = useState("");
  const [expense, setExpense] = useState("");
  const [compensation, setCompensation] = useState("0.5");

  const submitForm = (event) => {
    event.preventDefault();

    const item = {
      expense: expense,
      cost: cost,
      person: person,
      compensation: compensation,
    };

    props.onExpenseSubmit(item);
  };

  const handleCost = (event) => {
    setCost(event.target.value);
  };

  const handleExpense = (event) => {
    setExpense(event.target.value);
  };

  const handleCompensation = (event) => {
    setCompensation(event.target.value);
  };

  const handlePerson = (event) => {
    setPerson(event.target.value);
  };

  return (
    <>
      <div>
        <h1>Kostnadsformulär</h1>
        <form onSubmit={submitForm}>
          <div className="form-group mt-2">
            <label htmlFor="expense">Utgiftspost</label>
            <input
              className="form-control"
              id="expense"
              name="expense"
              onChange={handleExpense}
              placeholder="Ange utgiftspost"
              type="text"
            ></input>
          </div>
          <div className="form-group mt-2">
            <label htmlFor="cost">Kostnad</label>
            <input
              className="form-control"
              id="cost"
              name="cost"
              onChange={handleCost}
              placeholder="Ange kostnad"
              type="text"
            ></input>
          </div>
          <div className="form-group mt-2">
            <label htmlFor="compensation">Ange ersättningsgrad</label>
            <select
              className="form-control"
              id="compensation"
              name="compensation"
              onChange={handleCompensation}
              value={compensation}
            >
              <option value="0.5">50%</option>
              <option value="1">100%</option>
            </select>
          </div>

          <div className="form-group">
            <label className="col-12 mb-1 mt-2">Utläggare</label>
            <div className="form-check">
              <input
                className="form-check-input"
                id="henrik"
                name="flexRadioDefault"
                onClick={handlePerson}
                type="radio"
                value="Henrik"
              ></input>
              <label className="form-check-label" htmlFor="henrik">
                Henrik
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                id="ida"
                name="flexRadioDefault"
                onClick={handlePerson}
                type="radio"
                value="Ida"
              ></input>
              <label className="form-check-label" htmlFor="ida">
                Ida
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary mt-2">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default InputForm;
