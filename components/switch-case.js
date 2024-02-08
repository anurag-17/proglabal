import styles from "./switch-case.module.css";

const SwitchCase = () => {
  return (
    <div className={styles.switchCase}>
      <img
        className={styles.variableAssignmentIcon}
        alt=""
        src="/variable-assignment@2x.png"
      />
      <div className={styles.incrementOperator}>
        <img
          className={styles.badgeLogoWhite3}
          alt=""
          src="/badge-logo-white-3@2x.png"
        />
        <h1 className={styles.areYouReadyContainer}>
          <span>{`Are you ready to take `}</span>
          <span className={styles.massive}>MASSIVE</span>
          <span> action?</span>
        </h1>
        <div className={styles.rememberOurMission}>
          Remember, our mission at ProGlobal Business Advisors isn't just about
          building a business; it's about building a legacy of excellence and
          impact in the business coaching industry. Every tool, resource, and
          piece of training we provide is designed with this legacy in mind,
          ensuring that we all rise to the highest standards of success and
          integrity.
        </div>
        <div className={styles.readyToGet}>
          Ready to get started? Please feel free to reach out. Your success and
          growth are why we're here, and I personally guarantee that we will do
          everything in our power to help you achieve your goals.
        </div>
        <div className={styles.assignmentOperator}>
          <div className={styles.toYourSuccess}>To your success,</div>
        </div>
        <div className={styles.functionCall}>
          <div className={styles.signatureFrame}>
            <img
              className={styles.signature1Icon}
              loading="eager"
              alt=""
              src="/signature-1@2x.png"
            />
            <img
              className={styles.signatureFrameChild}
              alt=""
              src="/rectangle-32.svg"
            />
          </div>
          <div className={styles.malcolmReidSr}>Malcolm Reid, Sr.</div>
        </div>
      </div>
      <div className={styles.subscribeButtonWrapper}>
        <div className={styles.subscribeButton}>
          <div
            className={styles.discoverTheDifference}
          >{`Join our Movement `}</div>
          <img
            className={styles.subscribeButtonChild}
            alt=""
            src="/arrow-1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default SwitchCase;
