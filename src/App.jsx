import "./App.css";
import Header from "./components/Header.jsx";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";
import Banner from "./components/Banner.jsx";

function App() {
  return (
    <div>
      <Banner />
      <Header />
      <Nav />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
