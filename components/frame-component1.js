import styles from "./frame-component1.module.css";

const FrameComponent1 = () => {
  return (
    <div className={styles.wrapperWhiteBgParent}>
      <div className={styles.wrapperWhiteBg}>
        <img className={styles.whiteBgIcon} alt="" src="/white-bg@2x.png" />
      </div>
      <div className={styles.text} />
      <div className={styles.rectangleParent}>
        <div className={styles.rectangle}>
          <div className={styles.frameContainer}>
            <div className={styles.applicationProcess}>
              <div className={styles.rectangleDivider}>
                <h1 className={styles.exploreProfitcoachBusinessContainer}>
                  <span>{`Explore `}</span>
                  <span className={styles.profitcoach}>ProfitCoach</span>
                  <span> Business Center</span>
                </h1>
                <div className={styles.tm}>TM</div>
              </div>
              <h3 className={styles.allTheFeatures}>
                All the features you need to build the business you've always
                wanted.
              </h3>
            </div>
          </div>
          <div className={styles.vectorSeparator}>
            <div className={styles.stayConnected}>
              <div className={styles.emailInput}>
                <b className={styles.subscribeNow}>01</b>
                <div className={styles.profitCoachBusiness}>
                  Profit Coach Business Center
                </div>
              </div>
              <div className={styles.aComprehensiveSolution}>
                A comprehensive solution to manage every aspect of your coaching
                business.
              </div>
            </div>
            <div className={styles.stayConnected1}>
              <div className={styles.parent}>
                <b className={styles.b}>04</b>
                <div className={styles.clientImplementation}>
                  Client Implementation
                </div>
              </div>
              <div className={styles.seamlessIntegrationOf}>
                Seamless integration of Profit Coach Business Center tools into
                operations.
              </div>
            </div>
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.rectangle1}>
              <div className={styles.rectangle2}>
                <b className={styles.group}>02</b>
                <div className={styles.resourceCenter}>
                  <p className={styles.resource}>Resource</p>
                  <p className={styles.center}>Center</p>
                </div>
              </div>
              <div className={styles.aWealthOf}>
                A wealth of materials, insights, and tools from
                ProfitUniversity™ tailored for business growth.
              </div>
            </div>
            <div className={styles.frameAParent}>
              <div className={styles.frameA}>
                <b className={styles.textLabel}>05</b>
                <div className={styles.pathwayToProfit}>
                  Pathway to Profit Assessments
                </div>
              </div>
              <div className={styles.confidentNavigationOf}>
                Confident navigation of business journeys.
              </div>
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.container}>
                <b className={styles.b1}>03</b>
                <div className={styles.certifiedTraining}>
                  Certified Training
                </div>
              </div>
              <div className={styles.specializedTrainingLeveragin}>
                Specialized training leveraging advanced strategies and tools
                from ProfitUniversity™.
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.parent1}>
                <b className={styles.b2}>06</b>
                <div className={styles.profituniversityTrainingVid}>
                  ProfitUniversity™ Training Videos
                </div>
              </div>
              <div className={styles.expertLedTutorialsAnd}>
                Expert-led tutorials and insights for continuous growth.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.bUttonParent}>
            <div className={styles.bUtton}>
              <div className={styles.bUttonChild} />
              <div className={styles.footerBottom}>
                <div className={styles.footerBottomChild} />
              </div>
              <div className={styles.discoverTheDifferenceParent}>
                <div
                  className={styles.discoverTheDifference}
                >{`Join our Movement `}</div>
                <img className={styles.frameChild} alt="" src="/arrow-1.svg" />
              </div>
            </div>
            <div className={styles.bUtton1}>
              <div className={styles.frameParent2}>
                <div className={styles.rectangleWrapper}>
                  <div className={styles.frameItem} />
                </div>
                <div className={styles.frameInner} />
                <div className={styles.learnMore}>Learn more</div>
                <img className={styles.arrowIcon} alt="" src="/arrow-1-3.svg" />
              </div>
            </div>
          </div>
          <div className={styles.readyToJoinFrame}>
            <div className={styles.joinEliteCommunityFrame}>
              <b className={styles.contactProGlobal}>07</b>
              <div className={styles.communityAccess}>Community Access</div>
            </div>
            <div className={styles.anEliteCommunity}>
              An elite community of ProfitCoaches™ with comprehensive support.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
