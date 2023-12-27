import { useState } from "react";
import { useForm } from "react-hook-form";
import "./InputForm.css";

const InputForm = ({ onExpenseSubmit, onFormSubmit }) => {
  const options = ["Henrik", "Ida"];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {

    const item = {
      name: data.name,
      cost: data.cost,
      payer: data.payer,
      split: data.split,
    };

    onFormSubmit(item);

    const httpPostRequestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    };

    fetch("https://splitvajs.fly.dev/v2/expense", httpPostRequestOptions)
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <>
      <div className="input-form">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Kostnadsformulär</h2>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-6 text-left">
                <label className="my-2" htmlFor="name">
                  Namn på utgift
                </label>
                <input
                  {...register("name", { required: true })}
                  className="form-control"
                  id="name"
                  label="name"
                  placeholder="Ange utgiftsnamn"
                  type="text"
                ></input>
                {errors.name && errors.name.type === "required" && (
                  <p className="errorMsg">Ange ett namn på utgiften</p>
                )}
              </div>

              <div className="col-6 text-left">
                <label className="my-2" htmlFor="cost">
                  Kostnad
                </label>
                <input
                  {...register("cost", { required: true })}
                  className="form-control"
                  id="cost"
                  label="cost"
                  placeholder="Ange kostnad"
                  type="number"
                ></input>
                {errors.cost && errors.cost.type === "required" && (
                  <p className="errorMsg">Ange en kostnad</p>
                )}
              </div>
            </div>

            <div className="row">
              <div className="col-6 text-left">
                <div className="form-row">
                  <label className="my-2" htmlFor="split">
                    Ange kostandsfördelning
                  </label>
                  <select
                    {...register("split", { required: true })}
                    className="form-control"
                    id="split"
                    label="split"
                  >
                    <option value="EQUAL">Jämt</option>
                    <option value="FULL">Fullt</option>
                  </select>
                  {errors.split && errors.split.type === "required" && (
                    <p className="errorMsg">Ange kostandsfördelning.</p>
                  )}
                </div>
              </div>

              <div className="col-6 text-left">
                <div className="form-row">
                  <label className="my-2" htmlFor="payer">
                    Utläggare
                  </label>
                  <select
                    {...register("payer", { required: true })}
                    className="form-control"
                    id="payer"
                    label="payer"
                  >
                    {options.map((value) => (
                      <option value={value} key={value}>
                        {value}
                      </option>
                    ))}
                    {errors.payer && errors.payer.type === "required" && (
                      <p className="errorMsg">
                        Ange vem som var utläggsansvarig.
                      </p>
                    )}
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-16 mt-2 text-left">
                <button type="submit" className="submit-btn mt-2">
                  Lägg till
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default InputForm;
