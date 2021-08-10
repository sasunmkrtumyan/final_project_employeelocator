import mainLogo from "../../assets/images/mainlogo.png";
import NavSearch from "../navSearch/NavSearch";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <nav className="nav">
          <div className="logo-div">
            <img src={mainLogo} alt="mainLogo" title="joblocator-logo" />
          </div>
          <div>
            <ul className="nav-ul">
              <li className="nav-li">Home</li>
              <li className="nav-li">About</li>
              <li className="nav-li">Companies</li>
              <li className="nav-li">Contact</li>
              <li className="login">Login / Signup</li>
              {/* <div>
                <NavSearch />
              </div> */}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
