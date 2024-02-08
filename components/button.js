import styles from "./button.module.css";

const Button = () => {
  return (
    <header className={styles.button}>
      <div className={styles.buttonChild} />
      <div className={styles.horizontalLogoAcademyWhiteWrapper}>
        <img
          className={styles.horizontalLogoAcademyWhite}
          loading="eager"
          alt=""
          src="/horizontal-logo-academy-white-1@2x.png"
        />
      </div>
      <div className={styles.aboutUs}>ABOUT US</div>
      <div className={styles.vector}>
        <img className={styles.fi1633716Icon} alt="" src="/fi-1633716.svg" />
      </div>
      <div className={styles.services}>SERVICES</div>
      <div className={styles.vector1}>
        <img className={styles.fi1633716Icon1} alt="" src="/fi-1633716.svg" />
      </div>
      <div className={styles.technology}>TECHNOLOGY</div>
      <div className={styles.vector2}>
        <img className={styles.fi1633716Icon2} alt="" src="/fi-1633716.svg" />
      </div>
      <div className={styles.vector3}>
        <div className={styles.membership}>MEMBERSHIP</div>
      </div>
      <div className={styles.vector4}>
        <img className={styles.fi1633716Icon3} alt="" src="/fi-1633716.svg" />
      </div>
      <div className={styles.badgeLogoWhite}>
        <div className={styles.testimonials}>TESTIMONIALS</div>
        <div className={styles.resources}>resources</div>
      </div>
      <div className={styles.vector5}>
        <img className={styles.fi1633716Icon4} alt="" src="/fi-1633716.svg" />
      </div>
      <div className={styles.vector6}>
        <div className={styles.becomeACoach}>become a coach</div>
      </div>
      <div className={styles.vector7}>
        <div className={styles.contact}>contact</div>
      </div>
      <div className={styles.events}>events</div>
    </header>
  );
};

export default Button;
