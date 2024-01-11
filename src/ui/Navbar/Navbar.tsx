import ScrollLink from "../../components/ScrollLink";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navContainer}>
      <ul className={styles.navULContainer}>
        <ScrollLink section="home" />
        <ScrollLink section="about us" />
        <ScrollLink section="projects" />
        <span className={styles.contactUs}>
          <ScrollLink section="contact us" />
        </span>
      </ul>
    </nav>
  );
}
