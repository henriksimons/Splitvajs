import picture from "../ng90uweas9hpvaeehcrs.avif";
import { styles } from "./Header.css";

const Header = (props) => {
  const headerText = props.headerText;
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <img className="header-img" src={picture} alt="Logo" />
          </div>
          <div className="col-8 align-self-center">
            <div className="app-name">{headerText}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
