import logo from "./Untitled.png";
import personlogo from "./Person_Logo.png";

const NavBar = () => {
  return (
    <div>
      <div className="navBar">
        <div className="leftnavBar">
          <img className="logo" src={logo} alt="No" />
          <a href="/" className="heading">
            <h1>VehiSafe</h1>
          </a>
        </div>
        <div className="personLogolink">
          <a href="/contacts">
            <img className="personLogo" src={personlogo} alt="No" />
          </a>
        </div>
      </div>
      <div className="line">
        <hr></hr>
      </div>
    </div>
  );
};

export default NavBar;
