import React from "react";
import styles from "./Header.module.css";
import Nav from "./Nav";

const Header = (props) => {
  return (
    <div className="container">
      <header className={styles.header}>
        <Nav />
      </header>
    </div>
  );
};

export default Header;
