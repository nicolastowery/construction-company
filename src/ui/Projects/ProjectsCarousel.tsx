import styles from "./Projects.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projects } from "../../data/projects";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ProjectsCarouselArrow from "./ProjectsCarouselArrow";

interface ProjectCarouselProps {
  activeCategory: string;
}

export default function ProjectsCarousel({
  activeCategory,
}: ProjectCarouselProps) {
  const activeProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.projectType === activeCategory);

  const settings = {
    className: "center",
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    arrows: true,
    centerMode: true,
    infinite: true,
    centerPadding: "-16px",
    slidesToShow: 2,
    rows: 1,
    slidesPerRow: 2,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    cssEase: "linear",
    initialSlide: 1,
    // Passing empty arrow function to satisfy onClick for TS
    prevArrow: <ProjectsCarouselArrow direction="left" onClick={() => {}} />,
    nextArrow: <ProjectsCarouselArrow direction="right" onClick={() => {}} />,
    customPaging: () => <div className={styles.sliderIcon} />,
  };

  return (
    <div>
      <div className={styles.projectsCarouselContainer}>
        <Slider {...settings}>
          {activeProjects.map((p) => (
            <ProjectCard
              imgFilePath={p.imgFilePath}
              title={p.title}
              address={p.address}
              key={p.title}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}
