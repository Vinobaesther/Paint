
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";

 function Hero() {

  const navigate=useNavigate();
  
  return (
    <div className={styles.wrapper}>

     
      <section className={styles.moods}>
        <h2>Choose Your Vibe</h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={`${styles.color} ${styles.green}`}></div>
            <h3>Nature Calm</h3>
            <p>Soft greens that bring freshness and peace.</p>
          </div>

          <div className={styles.card}>
            <div className={`${styles.color} ${styles.blue}`}></div>
            <h3>Ocean Breeze</h3>
            <p>Cool blues for modern elegant interiors.</p>
          </div>

          <div className={styles.card}>
            <div className={`${styles.color} ${styles.pink}`}></div>
            <h3>Luxury Rose</h3>
            <p>Warm tones with premium glossy finish.</p>
          </div>

          <div className={styles.card}>
            <div className={`${styles.color} ${styles.dark}`}></div>
            <h3>Royal Matte</h3>
            <p>Deep shades for bold stylish spaces.</p>
          </div>
        </div>
      </section>

      <section className={styles.feature}>
        <div className={styles.left}>
          <h2>Premium Paint Technology</h2>
          <p>
            Our paints are engineered with advanced durability, stain resistance,
            and ultra-smooth finish for both interiors and exteriors.
          </p>

          <ul>
            <li>✔ Weather Shield Protection</li>
            <li>✔ Ultra Washable Surface</li>
            <li>✔ Long-lasting Colors</li>
          </ul>
        </div>
 </section>

      <section className={styles.cta}>
        <h2>Ready to Transform Your Space?</h2>
        <button onClick={()=>navigate("/Getstarted")}>Get Started </button>
      </section>

    </div>
  );
}

export default Hero;