import styles from "./StatCard.module.css";

interface StatCardProps {
  amount: number;
  text: string;
  iconPath: string;
  iconLocation: "top-left" | "top-right" | "bottom-right";
  position: "first" | "second" | "third" | "fourth";
}

export default function StatCard({
  amount,
  text,
  iconPath,
  iconLocation,
  position,
}: StatCardProps) {
  return (
    <>
      <div className={`${styles.statCardContainer} ${styles[position]}`}>
        <h1>{amount}</h1>
        <div className={styles.statCardTextContainer}>
          <div className={styles.statCardBlock}></div>
          <div className={styles.statCardText}>{text}</div>
        </div>
        <img
          src={iconPath}
          className={`${styles.icon} ${styles[iconLocation]}`}
        />
      </div>
      <br />
    </>
  );
}
