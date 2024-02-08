import styles from "./frame-component3.module.css";

const FrameComponent3 = () => {
  return (
    <div className={styles.textParent}>
      <div className={styles.text}>
        <div className={styles.rectangle}>
          <div className={styles.text1}>
            <h1 className={styles.unleashYourPotentialContainer}>
              <span>{`Unleash Your `}</span>
              <span className={styles.potential}>Potential</span>
              <span>{` & Transform Your Passions into `}</span>
              <span className={styles.profit}>Profit</span>
            </h1>
            <div className={styles.joinTheNext}>
              Join the next generation of leaders who are redefining business
              coaching one success story at a time.
            </div>
          </div>
          <div className={styles.bUtton}>
            <div className={styles.text2}>
              <div className={styles.line} />
            </div>
            <div className={styles.text3} />
            <div className={styles.button}>
              <div
                className={styles.discoverTheDifference}
              >{`Discover the difference `}</div>
              <img className={styles.buttonChild} alt="" src="/arrow-1.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.textWrapper}>
        <div className={styles.text4}>
          <img
            className={styles.badgeLogoWhite1}
            alt=""
            src="/badge-logo-white-1@2x.png"
          />
          <div className={styles.textGroup}>
            <div className={styles.text5} />
            <img
              className={styles.blackmanTransparent1}
              loading="eager"
              alt=""
              src="/blackman-transparent-1@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
