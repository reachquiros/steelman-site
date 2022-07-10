import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import WhatIs from "./components/whatIs/WhatIs";
import Events from "./components/events/Events";
import Locations from "./components/locations/Locations";
import ContactUs from "./components/contact-us/ContactUs";

function App() {
  return (
    <div className={`App ${styles.body}`}>
      <div className="container-fluid px-0">
        <Header />
        <Routes>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/what-is" element={<WhatIs />}></Route>
          <Route exact path="/events" element={<Events />}></Route>
          <Route exact path="/locations" element={<Locations />}></Route>
          <Route exact path="/contact-us" element={<ContactUs />}></Route>
        </Routes>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
