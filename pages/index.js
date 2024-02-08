import Button from "../components/button";
import FrameComponent3 from "../components/frame-component3";
import GroupComponent1 from "../components/group-component1";
import GroupComponent from "../components/group-component";
import ContactUsBox from "../components/contact-us-box";
import EmailAddressInput from "../components/email-address-input";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import FirstNameField from "../components/first-name-field";
import FrameComponent from "../components/frame-component";
import SwitchCase from "../components/switch-case";
import ApplicationForm from "../components/application-form";
import styles from "./index.module.css";

const HomepageProGlobalUpdate = () => {
  return (
    <div className={styles.homepageProglobalUpdate10}>
      <img
        className={styles.homepageProglobalUpdate10Child}
        alt=""
        src="/group-39915.svg"
      />
      <img className={styles.whiteBgIcon} alt="" src="/white-bg.svg" />
      <div className={styles.homepageProglobalUpdate10Item} />
      <section className={styles.rectangleParent}>
        <div className={styles.rectangle}>
          <div className={styles.rectangleChild} />
          <div className={styles.arrow}>
            <img
              className={styles.frameIcon}
              loading="eager"
              alt=""
              src="/vector.svg"
            />
            <div className={styles.infoproglobalcom}>info@proglobal.com</div>
          </div>
          <div className={styles.facebookAppSymbol}>
            <div className={styles.linkedInFill}>
              <img className={styles.frameIcon1} alt="" src="/vector-1.svg" />
              <div className={styles.rectangle1}>+123 150 7858</div>
            </div>
            <img
              className={styles.facebookAppSymbol2Icon}
              loading="eager"
              alt=""
              src="/facebookappsymbol-2.svg"
            />
          </div>
          <div className={styles.applicationProcess}>
            <img
              className={styles.applicationProcessChild}
              loading="eager"
              alt=""
              src="/frame-1000005523.svg"
            />
          </div>
          <div className={styles.applicationProcess1}>
            <img
              className={styles.applicationProcessItem}
              loading="eager"
              alt=""
              src="/frame-1000005524.svg"
            />
          </div>
          <img
            className={styles.rilinkedinFillIcon}
            loading="eager"
            alt=""
            src="/rilinkedinfill.svg"
          />
        </div>
        <div className={styles.rectangle2}>
          <Button />
          <FrameComponent3 />
        </div>
      </section>
      <section className={styles.group}>
        <div className={styles.component13}>
          <GroupComponent1 />
          <div className={styles.emailAddress}>
            <div className={styles.badgeLogoWhite2Parent}>
              <img
                className={styles.badgeLogoWhite2}
                alt=""
                src="/badge-logo-white-2@2x.png"
              />
              <b className={styles.whoWeAreContainer}>
                <p className={styles.who}>
                  <span className={styles.who1}>Who</span>
                </p>
                <p className={styles.we}>
                  <span className={styles.we1}>We</span>
                </p>
                <p className={styles.are}>Are</p>
              </b>
              <b className={styles.whoYouAreContainer}>
                <p className={styles.who2}>
                  <span className={styles.who3}>Who</span>
                </p>
                <p className={styles.you}>
                  <span className={styles.you1}>You</span>
                </p>
                <p className={styles.are1}>Are</p>
              </b>
            </div>
            <div className={styles.bUtton}>
              <div className={styles.bUttonChild} />
              <div className={styles.styardstreetNewYork}>
                <div className={styles.infoproglobalcom1} />
              </div>
              <div className={styles.facebookAppSymbol1}>
                <div className={styles.whoYouAre}>Who you are</div>
                <img
                  className={styles.facebookAppSymbolChild}
                  alt=""
                  src="/arrow-1-1.svg"
                />
              </div>
            </div>
          </div>
          <GroupComponent />
        </div>
        <img
          className={styles.badgeLogoWhite21}
          alt=""
          src="/badge-logo-white-2-1@2x.png"
        />
      </section>
      <img
        className={styles.homepageProglobalUpdate10Inner}
        alt=""
        src="/group-39916.svg"
      />
      <img className={styles.groupIcon} alt="" src="/group-39917.svg" />
      <ContactUsBox />
      <EmailAddressInput />
      <FrameComponent2 />
      <div className={styles.lineDiv} />
      <div className={styles.homepageProglobalUpdate10Child1} />
      <div className={styles.homepageProglobalUpdate10Child2} />
      <div className={styles.homepageProglobalUpdate10Child3} />
      <section className={styles.rectangle3}>
        <FrameComponent1 />
        <div className={styles.linkedInFill1}>
          <FirstNameField />
          <FrameComponent />
          <SwitchCase />
        </div>
        <ApplicationForm />
      </section>
    </div>
  );
};

export default HomepageProGlobalUpdate;
