import { Link } from "react-scroll";
import styles from "./Navbar.module.css";

interface ScrollLinkProps {
  component: string;
  emphasized?: boolean;
}

export default function ScrollLink({ component, emphasized }: ScrollLinkProps) {
  return (
    <li>
      <Link
        to={component}
        smooth
        duration={500}
        className={emphasized ? styles.empLink : styles.link}
      >
        {component}
      </Link>
    </li>
  );
}
