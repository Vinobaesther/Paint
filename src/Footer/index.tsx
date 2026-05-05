import React from "react";
import styles from "./index.module.scss";


function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.top}>

                <div className={styles.brand}>
                    <div className={styles.logobox}>
                        <img src="./logo.png" alt="logo" />
                        <h2>PaintCraft</h2>
  </div>


                    <p>
                        Premium quality paints for modern homes and stunning exteriors.
                        Bring colors to life with elegance.
                    </p>
                </div>

                <div className={styles.links}>
                    <h3>Quick Links</h3>
                    <ul>
                        <li>Home</li>
                        <li>Products</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div className={styles.links}>
                    <h3>Products</h3>
                    <ul>
                        <li>Interior Paints</li>
                        <li>Exterior Paints</li>
                        <li>Wood Coatings</li>
                        <li>Wall Textures</li>
                    </ul>
                </div>

                <div className={styles.contact}>
                    <h3>Contact</h3>
                    <p>Chennai, India</p>
                    <p>+91 98765 43210</p>
                    <p>paintshop@email.com</p>
                </div>

            </div>


            <div className={styles.bottom}>
                <p>© 2026 PaintCraft. All rights reserved.</p>
            </div>
        </footer>
    );
};



export default Footer;