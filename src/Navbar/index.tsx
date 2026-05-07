import{ useState } from "react";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id:string)=>{
    const section=document.getElementById(id);

    if(section){
      section.scrollIntoView({
        behavior:"smooth",
      });
    }
setMenuOpen(false);
  };
  const navigate=useNavigate();

//   const one=()=>{
//     navigate("/PaintHome")
//   }

//   const two=()=>{
//     navigate("/Products")
//   }

//   const three=()=>{
//     navigate("/Paints")
//   }

// const four=()=>{
//   navigate("/Newarrivals")
// }

// const five=()=>{
//   navigate("/Contact")
// }


  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        
        <div 
        className={styles.logo}
        onClick={()=>scrollToSection("home")}
        >
        
          <img src="./logo.png" alt=""/>
            Paint Company
          </div>

        <ul className={`${styles.navlinks} ${menuOpen ? styles.active : ""}`}>
          <li onClick={()=>scrollToSection("home")}>Home</li>
          <li onClick={()=>scrollToSection("products")}>Products</li>
          <li onClick={()=>scrollToSection("colors")}>Colors</li>
          <li onClick={()=>scrollToSection("newarrivals")}>New Arrivals</li>
          <li onClick={()=>scrollToSection("contact")}>Contact</li>
        </ul>

        <div className={styles.right}>
          <button 
          className={styles.login}
          onClick={()=>navigate("/Loginpage")}>Login</button>

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