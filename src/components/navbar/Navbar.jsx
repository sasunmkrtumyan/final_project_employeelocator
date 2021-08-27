import { Link } from "react-router-dom";
import mainLogo from "../../assets/images/mainlogo.png";
// import NavSearch from "../navSearch/NavSearch";
import { Avatar, Image } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useAuth } from "../../helpers/hooks/useAuth";
// import userEvent from "@testing-library/user-event";

export default function Navbar() {
  const { signout, user } = useAuth();

  return (
    <div className="navbar">
      <div className="container">
        <nav className="nav">
          <div className="logo-div">
            <Link to="/">
              <img src={mainLogo} alt="mainLogo" title="employeelocator-logo" />
            </Link>
          </div>
          <div>
            <ul className="nav-ul">
              <li className="nav-li">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-li">
                <Link to="/AboutPage">About</Link>
              </li>
              <li className="nav-li">
                <Link to="/">Companies</Link>
              </li>
              <li className="nav-li">
                <Link to="/contact">Contact</Link>
              </li>

              {!user ? (
                <div>
                  <Link to="/login">Login</Link>
                  <span className="or">  or  </span>
                  <Link to="/SignupPage">Signup</Link>
                </div>
              ) : (
                <li onClick={signout}>
                  <Link to="/">Logout</Link>
                </li>
              )}

              {/* <NavSearch /> */}
              {!!user ? (
                <div>
                  <Link to="/MyAccountPage">
                    <Avatar
                      className="avatar"
                      title="my account"
                      style={{ backgroundColor: "#87d068" }}
                      icon={<UserOutlined />}
                    />
                  </Link>
                </div>
              ) : (
                ""
              )}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
