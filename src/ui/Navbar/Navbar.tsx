import ScrollLink from "./ScrollLink";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navContainer}>
      <ul className={styles.navULContainer}>
        <ScrollLink component="home" />
        <ScrollLink component="about us" />
        <ScrollLink component="projects" />
        <span className={styles.contactUs}>
          <ScrollLink component="contact us" emphasized />
        </span>
      </ul>
    </nav>
  );
}
