import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AboutPage from "./pages/aboutPage/AboutPage";
import ContactPage from "./pages/contactPage/ContactPage";
import HomePage from "./pages/homePage/HomePage";
import LoginPage from "./pages/loginPage/LoginPage";
import SignupPage from "./pages/signupPage/SignupPage";
import MyAccountPage from "./pages/myAccountPage/MyAccountPage";
import { ProvideAuth } from "./helpers/hooks/useAuth";

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
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  );
}
