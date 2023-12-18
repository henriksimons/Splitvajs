import picture from "../ng90uweas9hpvaeehcrs.avif";
import { styles } from "./Header.css";

const Header = (props) => {
  const headerText = props.headerText;
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 align-self-center text-left">
            <div className="app-name">{headerText}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
