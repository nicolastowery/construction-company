import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  imgFilePath: string;
  title: string;
  address: string;
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
          {/* Might want to use 3rd party library for lazy load */}
          <img src={imgFilePath} alt={title} loading="lazy" />
        </div>
        <div className={styles.projectCardTextContainer}>
          <h2>{title}</h2>
          <span className={styles.projectCardText}>{address}</span>
        </div>
      </a>
    </div>
  );
}
