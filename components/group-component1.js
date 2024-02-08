import styles from "./group-component1.module.css";

const GroupComponent1 = () => {
  return (
    <div className={styles.textCParent}>
      <div className={styles.textC} />
      <div className={styles.innovators}>INNOVATORS</div>
      <div className={styles.vectorE}>
        <div className={styles.businessCoaches}>BUSINESS COACHES</div>
        <div className={styles.proglobalBusinessAdvisors}>
          ProGlobal Business Advisors differentiates itself through its
          comprehensive, holistic approach to business coaching. Unlike many in
          the industry who focus predominantly on theory or motivation,
          ProGlobal emphasizes real-world application.
        </div>
      </div>
      <div className={styles.contactUs}>
        <div className={styles.firstName} />
        <div className={styles.proglobalStandsApart}>
          ProGlobal stands apart by integrating advanced technology into its
          coaching methodology. With the ProfitCoach Business Center and
          ProfitUniversity™, they offer state-of-the-art tools and resources
          that are uncommon in the coaching industry.
        </div>
      </div>
    </div>
  );
};

export default GroupComponent1;
