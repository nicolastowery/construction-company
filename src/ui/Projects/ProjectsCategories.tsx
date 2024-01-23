import styles from "./Projects.module.css";
export default function ProjectsCategories() {
  return (
    <div className={styles.projectsListContainer}>
      <ul className={styles.projectsList}>
        <li className={styles.projectsListItem}>
          <button className={styles.projectsListItemButton}>
            <div
              className={`${styles.selector} ${styles.isSelectedSelector}`}
            ></div>
            <span className={`${styles.span} ${styles.isSelectedSpan}`}>
              All
            </span>
          </button>
        </li>
        <li>
          <button className={styles.projectsListItemButton}>
            <div className={styles.selector}></div>
            <span className={styles.span}>Commercial</span>
          </button>
        </li>
        <li>
          <button className={styles.projectsListItemButton}>
            <div className={styles.selector}></div>
            <span className={styles.span}>Resedential</span>
          </button>
        </li>
        <li>
          <button className={styles.projectsListItemButton}>
            <div className={styles.selector}></div>
            <span className={styles.span}>Other</span>
          </button>
        </li>
      </ul>
    </div>
  );
}
