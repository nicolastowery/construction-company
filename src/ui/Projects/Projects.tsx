import ProjectCard from "../../components/ProjectCard/ProjectCard";
import styles from "./Projects.module.css";
import { projects } from "../../data/projects";
export default function Projects() {
  return (
    <div className={styles.projectsContainer}>
      <h1>Projects</h1>
      <div className={styles.projectsContentContainer}>
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
        <div className={styles.projectCardsComponentContainer}>
          {/*  make this its own component */}
          <div className={styles.projectCardsContainer}>
            {projects.map((p) => (
              <ProjectCard
                imgFilePath={p.imgFilePath}
                title={p.title}
                address={p.address}
              />
            ))}
          </div>
          <div className={styles.sliderControlsContainer}>
            <button className={styles.sliderBackButton}>
              <img src="icons/left-arrow.svg" />
              <span>Back</span>
            </button>
            <div className={styles.sliderIconContainer}>
              <div
                className={`${styles.sliderIconFilled} ${styles.sliderIcon}`}
              ></div>
              <div className={styles.sliderIcon}></div>
              <div className={styles.sliderIcon}></div>
              <div className={styles.sliderIcon}></div>
              <div className={styles.sliderIcon}></div>
            </div>
            <button className={styles.sliderNextButton}>
              <span>Next</span>
              <img src="icons/right-arrow.svg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
