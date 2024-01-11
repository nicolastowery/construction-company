import styles from "./Services.module.css";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import services from "../../data/services";
export default function Services() {
  return (
    <div className={styles.servicesContainer}>
      <div>
        <h1>Services</h1>
      </div>
      <div className={styles.serviceCardContainer}>
        {services.map((service, i = 0) => {
          return (
            <ServiceCard
              iconFilePath={service.iconFilePath}
              title={service.title}
              colorScheme={i % 2 === 0 ? "light" : "dark"}
              key={service.title}
            />
          );
        })}
      </div>
    </div>
  );
}
