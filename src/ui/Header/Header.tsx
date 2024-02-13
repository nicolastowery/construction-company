import Logo from "../../components/Logo/Logo";
import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.css";
import { useEffect, useState } from "react";
import HamburgerNavbar from "../Navbar/HamburgerNavbar";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [smallScreen, setSmallScreen] = useState(window.innerWidth <= 900);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      setIsSticky(offset > 100);
    };

    const handleResize = () => {
      setSmallScreen(window.innerWidth <= 900);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleOpen = () => {
    setIsOpen((open) => !open);
  };
  return (
    <header
      className={`${styles.headerContainer} ${isSticky ? styles.sticky : ""}`}
    >
      <Logo />
      {!smallScreen && <Navbar />}
      {smallScreen && <HamburgerNavbar isOpen={isOpen} onOpen={handleOpen} />}
    </header>
  );
}
