import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Button from "react-bootstrap/Button";
// import { Route, Routes, Link } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className={`App ${styles.body}`}>
      <div className="container-fluid px-0">
        <Header />
        <Home />
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
