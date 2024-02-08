import styles from "./group-component.module.css";

const GroupComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.resultsDriven}>RESULTS DRIVEN</div>
      <div className={styles.marketingExpertsParent}>
        <div className={styles.marketingExperts}>MARKETING EXPERTS</div>
        <div className={styles.proglobalBusinessAdvisors}>
          ProGlobal Business Advisors distinctively revolutionize marketing
          within the coaching sphere. They employ proven, impactful strategies
          including advanced PPC, SEO, web design, and lead generation.
        </div>
      </div>
      <div className={styles.atTheHeartOfProglobalsPhParent}>
        <div className={styles.atTheHeart}>
          At the heart of ProGlobal's philosophy is a deep commitment to the
          success of its clients. Unlike many coaching services where the focus
          might be on the coach's success or financial gain, ProGlobal
          prioritizes the client's growth and success above all.
        </div>
        <div className={styles.frameItem} />
      </div>
    </div>
  );
};

export default GroupComponent;
