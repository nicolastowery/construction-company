import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLeft}>
        TheBox Company &copy; 2022. All Rights Reserved
      </div>
      <div className={styles.footerRight}>
        <div>
          Original Design by{" "}
          <a href="https://www.figma.com/@loweinhello" target="_blank">
            Lowe Nguyen
          </a>{" "}
          under{" "}
          <a
            href="https://creativecommons.org/licenses/by/4.0/"
            target="_blank"
          >
            CC BY 4.0.
          </a>
        </div>
        <div>
          Implemented by{" "}
          <a href="https://nicolastowery.com" target="_blank">
            Nicolas Towery.
          </a>
        </div>
      </div>
    </footer>
  );
}
