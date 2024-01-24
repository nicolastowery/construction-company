import styles from "./Hero.module.css";
import { Element } from "react-scroll";
export default function Hero() {
  return (
    <Element name="home" className={styles.heroContainer}>
      <div className={styles.textContainer}>
        Building things is our mission.
      </div>
    </Element>
  );
}
