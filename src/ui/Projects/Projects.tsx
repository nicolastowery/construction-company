import styles from "./Projects.module.css";
import ProjectsCarousel from "./ProjectsCarousel";
import ProjectsCategories from "./ProjectsCategories";
export default function Projects() {
  return (
    <div className={styles.projectsContainer}>
      <h1>Projects</h1>
      <div className={styles.projectsContentContainer}>
        <ProjectsCategories />
        <ProjectsCarousel />
      </div>
    </div>
  );
}
