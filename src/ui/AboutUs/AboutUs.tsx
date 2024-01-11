import styles from "./AboutUs.module.css";

export default function AboutUs() {
  return (
    <div className={styles.aboutUsContainer}>
      <div className={styles.imageContainer}>
        <img src="headshot.png" alt="unsplash image" className={styles.image} />
      </div>
      <div className={styles.aboutUsInfoContainer}>
        <h1>About us</h1>
        <div className={styles.aboutUsTextContainer}>
          <div>
            For more than 30 years we have been delivering world-class
            construction and we've built many lasting relationships along the
            way.
          </div>
          <br />
          <div>
            We've matured into an industry leader and trusted resource for those
            seeking quality, innovation and reliability when building in the
            U.S.
          </div>
        </div>
        <button className={styles.aboutUsButton}>More on Our History</button>
      </div>
    </div>
  );
}
