
import styles from "./index.module.scss";

 function Contact() {
  return (
    <div className={styles.wrapper}>
      
      <section className={styles.hero}>
        <div className={styles.overlay}></div>
        <div className={styles.heroContent}>
          <h1>Bring Your Ideas to Life</h1>
          <p>We’re here to bring color to your world. Let’s talk paint!</p>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.container}>
          
          {/* LEFT INFO */}
          <div className={styles.info}>
            <h2>Contact Info</h2>
            <p>Reach out to us for premium paints, color consultation, and more.</p>

            <div className={styles.item}>
              <span>📍</span>
              <p>Chennai, Tamil Nadu, India</p>
            </div>

            <div className={styles.item}>
              <span>📞</span>
              <p>+91 98765 43210</p>
            </div>

            <div className={styles.item}>
              <span>📧</span>
              <p>support@paintshop.com</p>
            </div>
          </div>

          {/* FORM */}
          <div className={styles.formCard}>
            <h2>Send Message</h2>

            <form>
              <div className={styles.row}>
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
              </div>

              <input type="text" placeholder="Subject" />

              <textarea placeholder="Your Message"></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Contact;