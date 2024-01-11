import styles from "./ServiceCard.module.css";

interface ServiceCardProps {
  iconFilePath: string;
  title: string;
  colorScheme: "dark" | "light";
}

export default function ServiceCard({
  iconFilePath,
  title,
  colorScheme,
}: ServiceCardProps) {
  return (
    <div
      className={`${styles.serviceCardContainer} ${
        colorScheme === "dark" ? styles.dark : styles.light
      }`}
    >
      <img src={iconFilePath} alt={title} className={styles.icon} />
      <div className={styles.rectangle}></div>
      <div>{title}</div>
    </div>
  );
}
