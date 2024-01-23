import styles from "./Projects.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projects } from "../../data/projects";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ProjectsCarouselArrow from "./ProjectsCarouselArrow";

export default function ProjectsCarousel() {
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
    prevArrow: <ProjectsCarouselArrow direction="left" />,
    nextArrow: <ProjectsCarouselArrow direction="right" />,
    customPaging: () => <div className={styles.sliderIcon} />,
  };
  return (
    <div>
      <div className={styles.projectsCarouselContainer}>
        <Slider {...settings}>
          {projects.map((p) => (
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
