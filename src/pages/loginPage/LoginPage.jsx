import Footer from "../../components/footer/Footer";
import Login from "../../components/login/Login";
import Navbar from "../../components/navbar/Navbar";

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <div className="container loginpage">
        <Login />
      </div>
      <Footer />
    </>
  );
}
