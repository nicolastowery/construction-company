import { useState } from "react";
import styles from "./Projects.module.css";
import ProjectsCarousel from "./ProjectsCarousel";
import ProjectsCategories from "./ProjectsCategories";
export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Commercial", "Residential", "Other"];

  const handleNewActiveCategory = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <div className={styles.projectsContainer}>
      <h1>Projects</h1>
      <div className={styles.projectsContentContainer}>
        <ProjectsCategories
          activeCategory={activeCategory}
          categories={categories}
          onNewCategory={handleNewActiveCategory}
        />
        <ProjectsCarousel activeCategory={activeCategory} />
      </div>
    </div>
  );
}
