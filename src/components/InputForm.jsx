import { useState } from "react";
import { useForm } from "react-hook-form";
import { styles } from "./InputForm.css";

const InputForm = (props) => {
  const options = ["Henrik", "Ida"];

  const [id, setId] = useState(1);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const item = {
      id: id,
      name: data.name,
      cost: data.cost,
      person: data.person,
      repayment: data.repayment,
    };

    setId(id + 1);

    props.onExpenseSubmit(item);
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
                  <label className="my-2" htmlFor="repayment">
                    Ange ersättningsgrad
                  </label>
                  <select
                    {...register("repayment", { required: true })}
                    className="form-control"
                    id="repayment"
                    label="repayment"
                  >
                    <option value="0.5">50%</option>
                    <option value="1">100%</option>
                  </select>
                  {errors.repayment && errors.repayment.type === "required" && (
                    <p className="errorMsg">Ange ersättningsprocent.</p>
                  )}
                </div>
              </div>

              <div className="col-6 text-left">
                <div className="form-row">
                  <label className="my-2" htmlFor="person">
                    Utläggare
                  </label>
                  <select
                    {...register("person", { required: true })}
                    className="form-control"
                    id="person"
                    label="person"
                  >
                    {options.map((value) => (
                      <option value={value} key={value}>
                        {value}
                      </option>
                    ))}
                    {errors.person && errors.person.type === "required" && (
                      <p className="errorMsg">
                        Ange vem som var utläggsansvarig.
                      </p>
                    )}
                  </select>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 mt-3 text-left">
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
