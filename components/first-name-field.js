import styles from "./first-name-field.module.css";

const FirstNameField = () => {
  return (
    <div className={styles.firstNameField}>
      <div className={styles.firstNameFieldInner}>
        <img
          className={styles.frameChild}
          loading="eager"
          alt=""
          src="/rectangle-497@2x.png"
        />
      </div>
      <div className={styles.applicationProcessAndQualif}>
        <h1 className={styles.applicationProcessAnd}>
          Application Process and Qualification Criteria
        </h1>
      </div>
      <div className={styles.lastNameField}>
        <div className={styles.toMaintainThe}>
          To maintain the quality and effectiveness of our community, we
          carefully review each application to our membership programs.
          Prospective members must demonstrate a commitment to excellence, a
          willingness to learn and apply new strategies, and a dedication to
          achieving significant results for themselves and their clients.
        </div>
      </div>
      <div className={styles.frameContainer}>
        <h3 className={styles.readyToBecomeContainer}>
          <span>{`Ready to become our `}</span>
          <span className={styles.nextSuccessStory}>next success story?</span>
        </h3>
      </div>
      <div className={styles.lastNameField1}>
        <div className={styles.joinTheElite}>
          Join the elite community of ProGlobal Business Advisors and transform
          your coaching practice with our comprehensive suite of tools,
          training, and support. Apply now to our Platinum or Platinum Plus
          Membership Program and start your journey towards unprecedented
          success and impact.
        </div>
      </div>
      <div className={styles.frameContainer1}>
        <div className={styles.linkGroup}>
          <div className={styles.linkGroupChild} />
          <div className={styles.joinTheElite1}>Join the elite community</div>
          <img className={styles.linkGroupItem} alt="" src="/arrow-1-3.svg" />
        </div>
      </div>
      <div className={styles.textNode}>
        <div className={styles.rectangleShape} />
        <div className={styles.textContent} />
        <img
          className={styles.textNodeChild}
          loading="eager"
          alt=""
          src="/rectangle-40@2x.png"
        />
      </div>
    </div>
  );
};

export default FirstNameField;
