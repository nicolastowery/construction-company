import styles from "./Projects.module.css";

interface ProjectsCategoriesProps {
  activeCategory: string;
  categories: string[];
  onNewCategory: (category: string) => void;
}

export default function ProjectsCategories({
  activeCategory,
  categories,
  onNewCategory,
}: ProjectsCategoriesProps) {
  const handleClick = (category: string) => {
    onNewCategory(category);
  };

  return (
    <div className={styles.projectsListContainer}>
      <ul className={styles.projectsList}>
        {categories.map((c) => (
          <li className={styles.projectsListItem}>
            <button
              className={styles.projectsListItemButton}
              onClick={() => handleClick(c)}
            >
              <div
                className={`${styles.selector} ${
                  activeCategory === c ? styles.isSelectedSelector : ""
                }`}
              ></div>
              <span
                className={`${styles.span} ${
                  activeCategory === c ? styles.isSelectedSpan : ""
                }`}
              >
                {c}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
