import styles from "./Logo.module.css";

export default function Logo() {
  const src = "/logo.svg";
  return (
    <div className={styles.logoContainer}>
      <img src={src} alt="logo" />
      <span className={styles.textContainer}>
        The
        <span className={styles.box}>Box</span>
      </span>
    </div>
  );
}
