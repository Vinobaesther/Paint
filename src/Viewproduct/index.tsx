
import styles from "./index.module.scss";

const products = [
  {
    name: "Interior Paint",
    desc: "Smooth finish for beautiful indoor walls",
    img: "./product1.png"
  },
  {
    name: "Exterior Paint",
    desc: "Weather resistant and long lasting",
    img: "./product2.png"
  },
  {
    name: "Wood Coating",
    desc: "Premium protection for wooden surfaces",
    img: "./product3.png"
  },
  {
    name: "Metal Paint",
    desc: "Rust-proof and durable coating",
    img: "./product4.png"
  },
 {
  name: "Waterproof Paint",
  desc: "Strong moisture protection for walls and ceilings",
  img: "./product5.png"
},
{
  name: "Texture Paint",
  desc: "Stylish textured finish for modern interiors",
  img: "./product6.png"
}
];

function Viewproduct() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Our Products</h1>

      <div className={styles.grid}>
        {products.map((item, index) => (
          <div key={index} className={styles.card}>
            <img src={item.img} alt={item.name} />
            <div className={styles.content}>
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Viewproduct;