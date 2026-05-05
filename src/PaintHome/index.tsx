import React from "react";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";

const PaintHome = () => {

const navigate=useNavigate();

  return (
    <div className={styles.wrapper}>
   
      <section className={styles.hero}>
        <div className={styles.left}>
          <span className={styles.tag}>Welcome to Glidtex</span>

          <h1>
            Give shining <span>features</span> <br />
            to your home
          </h1>

          <ul className={styles.points}>
            <li>✔ Residential Painting</li>
            <li>✔ Interior Painting</li>
            <li>✔ Exterior Painting</li>
            <li>✔ Room Painting</li>
          </ul>

          <div className={styles.buttons}>
            <button className={styles.primary} onClick={()=>navigate("/Getquote")}>Get quote</button>
            
          </div>
        </div>

        <div className={styles.right}>
          <img
            src="./house.png"
            alt="painting"
          />
          <div className={styles.rating}>
            ⭐ 4.9 <span>2k+ reviews</span>
          </div>
        </div>
      </section>

     
      <section className={styles.services}>
        <p className={styles.subtitle}>Our Services</p>
        <h2>
          Spreading the joy of <span>painting</span> <br /> & coloring
        </h2>

  <div className={styles.cards}>
    
  <div className={styles.card}>
    <h3>Home Painting Solutions</h3>
    <p>
      Refresh your living spaces with rich colors, smooth finishes, and long-lasting beauty crafted for modern homes.
    </p>
  </div>

  <div className={styles.card}>
    <h3>Premium Interior Finishes</h3>
    <p>
      Experience elegant textures and flawless wall finishes that add depth, style, and luxury to your interiors.
    </p>
  </div>

  <div className={styles.card}>
    <h3>Exterior Protection Coatings</h3>
    <p>
      Shield your home from sun, rain, and dust with durable, weather-resistant paints designed for lasting performance.
    </p>
  </div>
</div>
      </section>
    </div>
  );
};

export default PaintHome;