const ResultBoard = (props) => {
  const getDiff = (n1, n2) => {
    if (n1 > n2) {
      return n1 - n2;
    } else if (n2 > n1) {
      return n2 - n1;
    } else return "0";
  };

  const getPayer = (i, h) => {
    if (i > h) {
      return "Henrik";
    }
    if (h > i) {
      return "Ida";
    }
  };

  const payer = getPayer(props.repaymentIda, props.repaymentHenrik);
  const diff = getDiff(props.repaymentIda, props.repaymentHenrik);

  const getMessage = (payer, diff) => {
    if (payer === "Ingen") {
      return "Jämt ut!";
    }
    if (payer === "Henrik") {
      return "Henrik för över " + diff + " kr till Ida";
    }
    if (payer === "Ida") {
      return "Ida för över " + diff + " kr till Henrik";
    }
  };

  return (
    <div className="container">
      <div className="row mt-2">
        <div className="col-3 align-self-center">
          Henrik får tillbaka: {props.repaymentHenrik} kr
        </div>
        <div className="col-3 align-self-center">
          Ida får tillbaka: {props.repaymentIda} kr
        </div>
        <div className="col-3 align-self-center">
          <h3>{getMessage(payer, diff)}.</h3>
        </div>
      </div>
    </div>
  );
};

export default ResultBoard;
