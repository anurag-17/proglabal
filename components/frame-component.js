import styles from "./frame-component.module.css";

const FrameComponent = () => {
  return (
    <div className={styles.whiteBgParent}>
      <img className={styles.whiteBgIcon} alt="" src="/white-bg-1@2x.png" />
      <div className={styles.textNode}>
        <img
          className={styles.frameContainerIcon}
          alt=""
          src="/frame-container@2x.png"
        />
        <div className={styles.textNode1}>
          <h1 className={styles.contactProglobalBusinessContainer}>
            <p className={styles.contact}>Contact</p>
            <p className={styles.proglobalBusinessAdvisors}>
              ProGlobal Business Advisors
            </p>
          </h1>
          <div className={styles.weAreHere}>
            We are here to answer any questions and guide you on your path to
            becoming a top-tier business coach or consultant. Whether you're
            considering joining our network, interested in our services, or
            simply want more information, our team is ready to assist you.
          </div>
        </div>
        <div className={styles.containerShape}>
          <div className={styles.textNode2}>
            <div className={styles.imageShape}>
              <div className={styles.contactInfoBlock}>
                <img
                  className={styles.emailInputIcon}
                  alt=""
                  src="/vector-3.svg"
                />
                <div
                  className={styles.stYard558}
                >{`St yard 558 street New York `}</div>
              </div>
              <div className={styles.contactInfoBlock1}>
                <img className={styles.vectorIcon} alt="" src="/vector-4.svg" />
                <div className={styles.div}>+123 150 7858</div>
              </div>
              <div className={styles.contactInfoBlock2}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector-5.svg"
                />
                <div className={styles.infoproglobalcom}>
                  info@proglobal.com
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.addressInput}>
          <div className={styles.followUsOn}>Follow us on:</div>
          <div className={styles.facebookLink}>
            <img
              className={styles.facebookAppSymbol2Icon}
              alt=""
              src="/facebookappsymbol-2-1.svg"
            />
            <img
              className={styles.linkedInLink}
              alt=""
              src="/frame-1000005523-1.svg"
            />
            <img
              className={styles.linkedInLink1}
              alt=""
              src="/frame-1000005524-1.svg"
            />
            <img
              className={styles.rilinkedinFillIcon}
              alt=""
              src="/rilinkedinfill-1.svg"
            />
            <img
              className={styles.facebookLinkChild}
              loading="eager"
              alt=""
              src="/group-9.svg"
            />
          </div>
        </div>
      </div>
      <form className={styles.applicationForm}>
        <div className={styles.flexboxAlignItems}>
          <div className={styles.firstNameField}>
            <div className={styles.gridTemplateRows}>
              <div className={styles.gridTemplateRowsChild} />
              <div className={styles.firstName}>First Name</div>
            </div>
            <div className={styles.lastNameField}>
              <div className={styles.lastNameFieldChild} />
              <div className={styles.lastName}>Last Name</div>
            </div>
          </div>
          <div className={styles.firstNameField1}>
            <div className={styles.firstNameFieldChild} />
            <div className={styles.emailAddress}>Email Address</div>
          </div>
          <div className={styles.firstNameField2}>
            <div className={styles.firstNameFieldItem} />
            <div className={styles.phone}>Phone</div>
          </div>
          <div className={styles.firstNameField3}>
            <div className={styles.firstNameFieldInner} />
            <div className={styles.address}>Address</div>
          </div>
          <div className={styles.firstNameField4}>
            <div className={styles.rectangleDiv} />
            <div className={styles.typeYourMessage}>Type your Message</div>
          </div>
        </div>
        <div className={styles.applyButton}>
          <div className={styles.applyNow}>Apply Now</div>
          <img className={styles.applyButtonChild} alt="" src="/arrow-1.svg" />
        </div>
      </form>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.variableDefinition}>
          <h3 className={styles.gainAccessTo}>
            Gain Access to Insights from Our Network of Advisors
          </h3>
          <div className={styles.subscribeToOur}>
            Subscribe to our Newsletter
          </div>
        </div>
        <div className={styles.emailInputFrame}>
          <div className={styles.button}>
            <div className={styles.enterYourEmail}>
              Enter your Email Address
            </div>
          </div>
          <div className={styles.emailInputFrameChild} />
          <div className={styles.bUtton}>
            <div className={styles.elseStatement}>
              <div className={styles.subscribeNow}>Subscribe now</div>
              <img
                className={styles.elseStatementChild}
                alt=""
                src="/arrow-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
