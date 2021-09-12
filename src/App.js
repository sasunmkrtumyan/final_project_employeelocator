import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AboutPage from "./pages/aboutPage/aboutPage";
import ContactPage from "./pages/contactPage/contactPage";
import HomePage from "./pages/homePage/HomePage";
import LoginPage from "./pages/loginPage/LoginPage";
import SignupPage from "./pages/signupPage/SignupPage";
import MyAccountPage from "./pages/myAccountPage/MyAccountPage";
import { ProvideAuth } from "./helpers/hooks/useAuth";
import EmployeeInfo from "./pages/employeeInfo/EmployeeInfo";

export default function App() {
  return (
    <ProvideAuth>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/Aboutpage">
              <AboutPage />
            </Route>
            <Route path="/contact">
              <ContactPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/SignupPage">
              <SignupPage />
            </Route>
            <Route path="/MyAccountPage">
              <MyAccountPage />
            </Route>
            <Route path="/employee-info/:uid">
              <EmployeeInfo />
            </Route>
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  );
}
