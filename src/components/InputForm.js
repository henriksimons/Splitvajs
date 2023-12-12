import { useState } from "react";

const InputForm = (props) => {
  const [id, setId] = useState(0);
  const [repayment, setRepayment] = useState(0.5);
  const [cost, setCost] = useState(0);
  const [name, setName] = useState("");
  const [person, setPerson] = useState("");

  const submitForm = (event) => {
    event.preventDefault();

    const item = {
      id: id,
      name: name,
      cost: cost,
      person: person,
      repayment: repayment,
    };

    setId(id + 1);

    props.onExpenseSubmit(item);
  };

  const handleCost = (e) => {
    setCost(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleRepayment = (e) => {
    setRepayment(e.target.value);
  };

  const handlePerson = (e) => {
    setPerson(e.target.value);
  };

  return (
    <>
      <div className="row">
        <div className="col-5">
          <h1>Kostnadsformulär</h1>
          <form onSubmit={submitForm}>
            <div className="form-group mt-2">
              <label htmlFor="expense">Utgiftspost</label>
              <input
                className="form-control"
                id="expense"
                name="expense"
                onChange={handleName}
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
              <label htmlFor="repayment">Ange ersättningsgrad</label>
              <select
                className="form-control"
                id="repayment"
                name="repayment"
                onChange={handleRepayment}
                value={repayment}
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
            <button type="submit" className="btn btn-success mt-2">
              Lägg till
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default InputForm;
