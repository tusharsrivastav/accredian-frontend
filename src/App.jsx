import "./App.css";
import Header from "./components/Header.jsx";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";
import Banner from "./components/Banner.jsx";
import Refer from "./components/Refer.jsx";
import Benefits from "./components/Benefits.jsx";
import FAQ from "./components/FAQ.jsx";
import Support from "./components/Support.jsx";
import FormModal from "./components/FormModal.jsx";
import { ModalProvider } from "./context/ModalContext.jsx";

function App() {
  return (
    <div>
      <ModalProvider>
        <FormModal />
        <Banner />
        <Header />
        <Nav />
        <Hero />
        <Refer />
        <Benefits />
      </ModalProvider>
      <FAQ />
      <Support />
      <Footer />
    </div>
  );
}

export default App;
