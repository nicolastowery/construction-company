import Logo from "../../components/Logo/Logo";
import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.css";
import { useEffect, useState } from "react";
export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      setIsSticky(offset > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`${styles.headerContainer} ${isSticky ? styles.sticky : ""}`}
    >
      <Logo />
      <Navbar />
    </header>
  );
}
