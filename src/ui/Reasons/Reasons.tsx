import ReputationCard from "../../components/ReputationCard/ReputationCard";
import styles from "./Reasons.module.css";

export default function Reasons() {
  return (
    <div className={styles.reasonsContainer}>
      <h1>Our Reputation</h1>
      <div className={styles.reputationCardsContainer}>
        <ReputationCard
          iconFilePath="icons/headset.svg"
          title="Best Services"
          text="Nullam senectus porttitor in eget. Eget rutrum leo interdum"
        />
        <ReputationCard
          iconFilePath="icons/headset.svg"
          title="Best Teams"
          text="Cursus semper tellus volutpat aliquet lacus."
        />
        <ReputationCard
          iconFilePath="icons/pencil-ruler.svg"
          title="Best Designs"
          text="Ultricies at ipsum nunc, tristique nam lectus."
        />
      </div>
    </div>
  );
}
