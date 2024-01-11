import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <div className={styles.CTAContainer}>
      <h1>What can we do for you?</h1>
      <div className={styles.subtitle}>
        We are ready to work on a project of any complexity, whether it's
        commercial or residential.
      </div>
      <form className={styles.form}>
        <div className={styles.formRow}>
          <input
            type="text"
            placeholder="Your Name*"
            className={styles.formInput}
          />
          <input
            type="text"
            id="customInput"
            placeholder="Email*"
            className={styles.formInput}
          />
        </div>
        <div className={styles.formRow}>
          <select className={styles.formInput}>
            <option value="" hidden>
              Reason for Contacting*
            </option>
            <option value="Construction">Construction</option>
            <option value="Renovation">Renovation</option>
            <option value="Consultation">Consultation</option>
            <option value="Repair Services">Repair Services</option>
            <option value="Architecture">Architecture</option>
            <option value="Electric">Electric</option>
          </select>
          <input type="text" placeholder="Phone" className={styles.formInput} />
        </div>
        <textarea placeholder="Message" className={styles.formTextArea} />
        <div className={styles.formText}>* indicates a required field</div>
        <div className={styles.formButtonContainer}>
          <button className={styles.formButton}>Submit</button>
        </div>
      </form>
    </div>
  );
}
