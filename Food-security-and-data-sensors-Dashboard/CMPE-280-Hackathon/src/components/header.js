import "./logo.css";
import "../img/wheat.png";

const Header = () => {
  return (
    <div className="row header">
      <div className="col-md-1 header-elements" style={{ paddingTop: "10px" }}>
        <img src={require("../img/wheat.png")} width="60" height="60" />
      </div>
      <div className="col-md-11 header-elements">
        <span>Food Security Dashboard</span>
      </div>
    </div>
  );
};

export default Header;
