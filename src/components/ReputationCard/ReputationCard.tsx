import styles from "./ReputationCard.module.css";

interface ReputationCardProps {
  iconFilePath: string;
  title: string;
  text: string;
}

export default function ReputationCard({
  iconFilePath,
  title,
  text,
}: ReputationCardProps) {
  return (
    <div className={styles.reputationCardContainer}>
      <div className={styles.iconContainer}>
        <img src={iconFilePath} alt={title} className={styles.icon} />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.text}>{text}</div>
    </div>
  );
}
