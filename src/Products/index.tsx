
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Wall Paints Bucket",
    image: "./pro1.png",
  },
  {
    id: 2,
    name: "Premium Wall Paint",
    image: "./pro2.png",
  },
  {
    id: 3,
    name: "Paint Brush Set",
    image: "./pro3.png",
  },
  {
    id: 4,
    name: "Modern Shade Paints",
    image: "./pro4.png",
  },
  {
    id:5,
    name:"Creative Paint Roller",
    image:"./pro5.png"
  },
  {
    id:6,
    name:"Designer Color Bucket",
    image:"./pro6.png"
  }
];

const Products: React.FC = () => {

  const navigate=useNavigate();
  
  return (
    <section className={styles.container}>
      <div className={styles.heading}>
        <span>Premium Collection</span>
        <h1>Paint Shop Products</h1>
      </div>

      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <div className={styles.imageBox}>
              <img src={product.image} alt={product.name} />
            </div>

            <div className={styles.content}>
              <h2>{product.name}</h2>

              <button className={styles.button} onClick={()=>navigate("/Viewproduct")}>
                View Product
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;