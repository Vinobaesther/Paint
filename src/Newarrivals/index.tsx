import styles from "./index.module.scss";

const products = [
  {
    name: "Royal Interior Gloss",
    tag: "New",

    img: "./new1.png",
  },
  {
    name: "Weather Shield Pro",
    tag: "Trending",
    
    img: "./new2.png",
  },
  {
    name: "Luxury Velvet Touch",
    tag: "Premium",
  
    img: "./new3.png",
  },

];

 function Newarrivals() {
  return (
    <div className={styles.wrapper}>
     
      <div className={styles.hero}>
        <h1>New Arrivals</h1>
        <p>Fresh shades. Premium finish. Upgrade your space.</p>
      </div>

      <div className={styles.grid}>
        {products.map((item, index) => (
          <div className={styles.card} key={index}>
           

            <img src={item.img} alt={item.name} />

            <div className={styles.content}>
              <span className={styles.tag}>{item.tag}</span>
              <h3>{item.name}</h3>
              <button>View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Newarrivals;