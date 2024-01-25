import { Twirl as Hamburger } from "hamburger-react";
import Navbar from "./Navbar";
import styles from "./Navbar.module.css";

interface HamburgerNavberProps {
  isOpen: boolean;
  onOpen: () => void;
}

export default function HamburgerNavbar({
  isOpen,
  onOpen,
}: HamburgerNavberProps) {
  return (
    <>
      <div className={styles.burgerMenuContainer}>
        <Hamburger toggled={isOpen} toggle={onOpen} />
        {isOpen && (
          <nav className={styles.navContainer}>
            <Navbar />
          </nav>
        )}
      </div>
    </>
  );
}
