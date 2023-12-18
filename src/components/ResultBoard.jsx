import "./ResultBoard.css";

const ResultBoard = ({
  repaymentIda,
  repaymentHenrik,
  totalHenrik,
  totalIda,
}) => {
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

  const payer = getPayer(repaymentIda, repaymentHenrik);
  const diff = getDiff(repaymentIda, repaymentHenrik);

  const getMessage = (payer, diff) => {
    if (payer === "Ingen") {
      return "Jämt ut!";
    }
    if (payer === "Henrik") {
      return "Henrik för över " + diff + " kr till Ida.";
    }
    if (payer === "Ida") {
      return "Ida för över " + diff + " kr till Henrik.";
    }
  };

  return (
    <div className="container">
      <div className="row text-center">
        <div className="col-6">
          Henriks total utlägg: <div className="expense">{totalHenrik}</div> kr.
        </div>
        <div className="col-6">
          Henrik får tillbaka:{" "}
          <div className="repayment">{repaymentHenrik}</div> kr.
        </div>
      </div>
      <div className="row text-center">
        <div className="col-6">
          Idas total utlägg: <div className="expense">{totalIda}</div> kr.
        </div>
        <div className="col-6">
          Ida får tillbaka: <div className="repayment">{repaymentIda}</div> kr.
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 text-center align-self-center">
          <h3>{getMessage(payer, diff)}</h3>
        </div>
      </div>
    </div>
  );
};

export default ResultBoard;
