import React, { useEffect } from "react";
import styles from "./App.module.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import WhatIs from "./components/whatIs/WhatIs";
import Events from "./components/events/Events";
import Locations from "./components/locations/Locations";
import ContactUs from "./components/contact-us/ContactUs";
import SignIn from "./components/signIn/SignIn";

function App() {
  useEffect(() => {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    if (prefersDarkScheme.matches) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, []);

  return (
    <div className={`App`}>
      <div className="container-fluid px-0">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route exact path="/what-is" element={<WhatIs />}></Route>
          <Route exact path="/events" element={<Events />}></Route>
          <Route exact path="/locations" element={<Locations />}></Route>
          <Route exact path="/contact-us" element={<ContactUs />}></Route>
          <Route exact path="/sign-in" element={<SignIn />}></Route>
        </Routes>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
