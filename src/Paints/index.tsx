
import styles from "./index.module.scss";

const images = [
  "./pink.png",
  "./blue.png",
  "./black.png",
  "./green.png",
  "./white.png",
  "./peacock.png",
  "./yellow.png",
  "./brown.png",
  "./orange.png",
  "./red.png",
  "./l green.png",
  "./purple.png",

];

const Paints = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Paint Collection</h2>

      <div className={styles.grid}>
        {images.map((img, i) => (
          <div
            key={i}
            className={styles.card}
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            <img src={img} alt="paint" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Paints;