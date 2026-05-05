import React, { useState } from "react";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate=useNavigate();

  const one=()=>{
    navigate("/PaintHome")
  }

  const two=()=>{
    navigate("/Products")
  }

  const three=()=>{
    navigate("/Paints")
  }

const four=()=>{
  navigate("/Newarrivals")
}

const five=()=>{
  navigate("/Contact")
}


  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        
        <div className={styles.logo}>
        
          <img src="./logo.png" alt=""/>
            Paint Company
          </div>

        <ul className={`${styles.navlinks} ${menuOpen ? styles.active : ""}`}>
          <li onClick={one}>Home</li>
          <li onClick={two}>Products</li>
          <li onClick={three}>Colors</li>
          <li onClick={four}>New Arrivals</li>
          <li onClick={five}>Contact</li>
        </ul>

        <div className={styles.right}>
          <button className={styles.login} onClick={()=>navigate("/Loginpage")}>Login</button>

          <div
            className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;