import styles from "./Projects.module.css";

interface ProjectsCarouselArrowProps {
  direction: "left" | "right";
  onClick: () => void;
}

export default function ProjectsCarouselArrow({
  direction,
  onClick,
}: ProjectsCarouselArrowProps) {
  if (direction === "left") {
    return (
      <button className={styles.sliderBackButton} onClick={onClick}>
        <img src="icons/left-arrow.svg" />
        <span>Back</span>
      </button>
    );
  }
  return (
    <button className={styles.sliderNextButton} onClick={onClick}>
      <span>Next</span>
      <img src="icons/right-arrow.svg" />
    </button>
  );
}
