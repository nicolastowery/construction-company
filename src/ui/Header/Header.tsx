import Logo from "../../components/Logo/Logo";
import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.css";
export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <Logo />
      <Navbar />
    </header>
  );
}
