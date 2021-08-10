import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
