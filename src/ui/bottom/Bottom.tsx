import Logo from "../../components/Logo/Logo";
import styles from "./Bottom.module.css";

export default function Bottom() {
  return (
    <div className={styles.bottomContainer}>
      <div className={styles.bottomContainerHalf}>
        <div className={styles.textContainer}>
          <span className={styles.label}>Address:</span>
          <span className={styles.text}>
            6391 Elgin St. Celina, Delaware 10299
          </span>
        </div>
        <div className={styles.textContainer}>
          <span className={styles.label}>Phone:</span>
          <span className={styles.text}>+84 1102 2703</span>
        </div>
        <div className={styles.textContainer}>
          <span className={styles.label}>Email:</span>
          <span className={styles.text}>hello@thebox.com</span>
        </div>
        <Logo />
      </div>
      <div className={styles.bottomContainerHalf}>
        <div className={styles.contentContainer}>
          <span className={styles.label}>Newsletter:</span>
          <form className={styles.form}>
            <input
              type="text"
              placeholder="Your email here"
              className={styles.input}
            />
            <button className={styles.button}>Subscribe</button>
          </form>
        </div>
        <div className={styles.contentContainer}>
          <span className={styles.label}>Social:</span>
          <div className={styles.socialContainer}>
            <a href="#">
              <img src="icons/facebook.svg" alt="Facebook Link" />
            </a>
            <a href="#">
              <img src="icons/linkedin.svg" alt="LinkedIn Link" />
            </a>
            <a href="#">
              <img src="icons/twitter.svg" alt="Twitter Link" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
