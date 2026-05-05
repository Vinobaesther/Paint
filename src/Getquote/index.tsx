import React from "react";
import styles from "./index.module.scss";

const Getquote = () => {
  return (
    <section className={styles.quotePage}>
      <div className={styles.glowOne}></div>
      <div className={styles.glowTwo}></div>

      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.tag}>Luxury Paint Experience</span>

          <h1>
            Transform Your Walls <br />
            Into Beautiful Stories
          </h1>

          <p>
            Discover elegant paint shades, premium wall finishes, and
            sophisticated textures crafted to bring warmth, beauty, and luxury
            into every corner of your home.
          </p>

          <div className={styles.quoteBox}>
            <div className={styles.quoteCard}>
              <h3>Premium Paint Shades</h3>
              <p>
                Rich color collections designed for modern interiors and
                stylish spaces.
              </p>
            </div>

            <div className={styles.quoteCard}>
              <h3>Luxury Wall Finish</h3>
              <p>
                Smooth texture finishes that give your walls a premium feel.
              </p>
            </div>

            <div className={styles.quoteCard}>
              <h3>Creative Color Ideas</h3>
              <p>
                Unique paint inspirations to make every room stand out.
              </p>
            </div>
          </div>

          <div className={styles.bottomText}>
            <h2>Get Your Dream Paint Consultation</h2>
            <p>
              Explore trending paint styles and modern color combinations for a
              perfect home makeover experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Getquote;