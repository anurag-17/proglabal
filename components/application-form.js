import styles from "./application-form.module.css";

const ApplicationForm = () => {
  return (
    <div className={styles.applicationForm}>
      <div className={styles.proGlobalLogo}>
        <div className={styles.homeFrames}>
          <div className={styles.homeWrapper}>
            <div className={styles.home}>
              <div className={styles.home1}>HOME</div>
            </div>
          </div>
          <div className={styles.home2}>
            <div className={styles.home3}>ABOUT US</div>
          </div>
          <div className={styles.homeContainer}>
            <div className={styles.home4}>
              <div className={styles.home5}>SERVICES</div>
            </div>
          </div>
          <div className={styles.homeFrame}>
            <div className={styles.home6}>
              <div className={styles.home7}>TECHNOLOGY</div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.home8}>
              <div className={styles.home9}>MEMBERSHIP</div>
            </div>
          </div>
          <div className={styles.contactInfoFrame}>
            <img
              className={styles.badgeLogoWhite}
              loading="eager"
              alt=""
              src="/badge-logo-white@2x.png"
            />
          </div>
          <div className={styles.homeWrapper1}>
            <div className={styles.home10}>
              <div className={styles.home11}>TESTIMONIALS</div>
            </div>
          </div>
          <div className={styles.homeWrapper2}>
            <div className={styles.home12}>
              <div className={styles.home13}>resources</div>
            </div>
          </div>
          <div className={styles.home14}>
            <div className={styles.home15}>become a coach</div>
          </div>
          <div className={styles.homeWrapper3}>
            <div className={styles.home16}>
              <div className={styles.home17}>contact</div>
            </div>
          </div>
          <div className={styles.home18}>
            <div className={styles.home19}>events</div>
          </div>
        </div>
      </div>
      <div className={styles.legalNoticesFrame}>
        <div className={styles.copyright} />
        <div className={styles.transformMatrix}>
          <div className={styles.createdByGorillaContainer}>
            <span>{`Created by `}</span>
            <span className={styles.gorillaAgency}>gorilla agency</span>
          </div>
          <div className={styles.rotationAxis}>
            <div className={styles.proglobalAllRightsReserved}>
              ©2024 pROgLOBAL. All rights reserved.
            </div>
          </div>
          <div className={styles.termsPrivacy}>Terms | Privacy policy</div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
