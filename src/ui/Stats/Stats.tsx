import { Link } from "react-scroll";
import StatCard from "../../components/StatCard/StatCard";
import styles from "./Stats.module.css";

export default function Stats() {
  return (
    <div className={styles.statsContainer}>
      <div className={styles.statCardsContainer}>
        <StatCard
          amount={84}
          text={"Happy Clients"}
          iconLocation="top-right"
          iconPath="icons/handshake.png"
          position="first"
        />
        <StatCard
          amount={123}
          text={"Projects Completed"}
          iconLocation="top-left"
          iconPath="icons/document.png"
          position="second"
        />
        <StatCard
          amount={37}
          text={"Awards Won"}
          iconLocation="top-right"
          iconPath="icons/award.png"
          position="third"
        />
        <StatCard
          amount={30}
          text={"Years in Business"}
          iconLocation="bottom-right"
          iconPath="icons/blueprints.png"
          position="fourth"
        />
      </div>
      <div className={styles.statInfo}>
        <h1>30 Years Experience</h1>
        <div className={styles.statInfoText}>
          Our company has been the leading provided construction services to
          clients throughout the USA since 1988.
        </div>
        <Link to="contact us" smooth duration={500}>
          Contact Us
        </Link>
      </div>
    </div>
  );
}
