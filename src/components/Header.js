import picture from "C:/Users/h3nke/Splitvajs/src/ng90uweas9hpvaeehcrs.avif";

const Header = (props) => {
  const headerText = props.headerText;
  return (
    <>
      <div className="container">
        <div className="row">
        <div className="col-2">
            <img className="header-img" src={picture} alt="Logo" />
          </div>
          <div className="col-10 align-self-center">
            <h1>{headerText}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
