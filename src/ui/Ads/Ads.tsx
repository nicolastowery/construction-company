import styles from "./Ads.module.css";

export default function Ads() {
  return (
    <div className={styles.adsContainer}>
      <div className={styles.adsTextContainer}>
        <h1>Free consultation with exceptional quality</h1>
        <div className={styles.adsText}>
          Just one call away: <a href="tel: 5551231234">+84 1102 2703</a>
        </div>
      </div>
      <button className={styles.adsButton}>Get your consultation</button>
    </div>
  );
}
