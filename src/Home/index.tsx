import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";

const slides = [
  { image: "./home.png" },
  { image: "./home1.png" },
];

const Home= () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000); // 3 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.slider}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`${styles.slide} ${
            index === current ? styles.active : ""
          }`}
        >
          <img src={slide.image} alt="parlour" />
        </div>
      ))}
    </div>
  );
};

export default Home;