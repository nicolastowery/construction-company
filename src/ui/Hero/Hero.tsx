import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.textContainer}>
        Building things is our mission.
      </div>
    </div>
  );
}
