
import styles from "./index.module.scss";

function Getstarted() {
  return (
    <div className={styles.container}>
      
      <div className={styles.card}>
        <h1>🎨Let’s Get Started🎨</h1>
        <p>
          Transform your space with premium paints. 
          Fill the details below to begin your journey.
        </p>

        <form className={styles.form}>
          
          <div className={styles.inputGroup}>
            <label>Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>

          <div className={styles.inputGroup}>
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className={styles.inputGroup}>
            <label>Project Type</label>
            <select>
              <option>Interior Painting</option>
              <option>Exterior Painting</option>
              <option>Commercial</option>
            </select>
          </div>

          <div className={styles.inputGroup}>
            <label>Message</label>
            <textarea placeholder="Describe your project..." />
          </div>

        </form>

        <span className={styles.note}>
          Our team will contact you shortly ✨
        </span>
      </div>

    </div>
  );
}

export default Getstarted;