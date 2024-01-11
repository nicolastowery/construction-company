import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  imgFilePath: string;
  title: string;
  address: string;
  // projectType: "commercial" | "resedential" | "other";
}

export default function ProjectCard({
  imgFilePath,
  title,
  address,
}: ProjectCardProps) {
  return (
    <div className={styles.projectCardContainer}>
      <a href="#">
        <div className={styles.projectCardImageContainer}>
          <img src={imgFilePath} />
        </div>
        <div className={styles.projectCardTextContainer}>
          <h2>{title}</h2>
          <span className={styles.projectCardText}>{address}</span>
        </div>
      </a>
    </div>
  );
}
