import styles from "./email-address-input.module.css";

const EmailAddressInput = () => {
  return (
    <section className={styles.emailAddressInput}>
      <div className={styles.phoneInput}>
        <div className={styles.frameGroupWithText}>
          <h1 className={styles.theDifference}>THE DIFFERENCE</h1>
          <div className={styles.proGlobalBusinessAdvisorsL}>
            <div className={styles.firstNameInput}>
              <div className={styles.lastNameInput} />
            </div>
            <h1 className={styles.weDeliverWhat}>
              WE DELIVER WHAT OTHERS ONLY PROMISE
            </h1>
            <div className={styles.firstNameInput1}>
              <div className={styles.firstNameInputChild} />
            </div>
          </div>
        </div>
        <div className={styles.exploreTheProglobal}>
          Explore the ProGlobal pillars of excellence and discover how we
          integrated every tool and strategy necessary to guarantee your
          success. From business coaching to full, integrated marketing
          campaigns, the ProGlobal Business Coaches mission is clear: be the
          transformation and provide real solutions that drive real results for
          small business owners around the world.
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.textContent}>
            <div className={styles.builtByCoaches}>
              Built by coaches for coaches.
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.subscribeFormParent}>
                <div className={styles.subscribeForm}>
                  <h1 className={styles.businessCoaching}>BUSINESS COACHING</h1>
                  <div className={styles.subscribeFormChild} />
                </div>
                <div className={styles.inTheRealmContainer}>
                  <p className={styles.inTheRealm}>
                    In the realm of business coaching, where mediocrity has
                    become the norm, ProGlobal Business Advisors stands as a
                    beacon of real, tangible change. We're not here to play by
                    the outdated rules that have long governed the coaching
                    industry. We're here to rewrite them. From the ground up,
                    we've reverse-engineered the path to success, crafting every
                    aspect of our operation to deliver not just results, but
                    groundbreaking transformations.
                  </p>
                  <p className={styles.atProglobalWeDontJustTa}>
                    <span className={styles.at}>At</span>
                    <span className={styles.proglobalWeDont}>
                      {" "}
                      ProGlobal, we don't just talk strategy; we breathe life
                      into it. Our methodologies aren't plucked from thin air;
                      they're battle-tested and proven across industries and
                      businesses of all sizes. We're not interested in pushing
                      strategies for the sake of it. Every tactic, every tool we
                      employ is laser-focused on one thing only – generating
                      tangible results for you and your clients.
                    </span>
                  </p>
                </div>
              </div>
              <div className={styles.missionStatement}>
                <div className={styles.bUtton}>
                  <div className={styles.bUttonChild} />
                  <div className={styles.dividerLine}>
                    <div className={styles.footerLinks} />
                  </div>
                  <div className={styles.applyButton}>
                    <div
                      className={styles.discoverTheDifference}
                    >{`Join our Movement `}</div>
                    <img
                      className={styles.applyButtonChild}
                      alt=""
                      src="/arrow-1.svg"
                    />
                  </div>
                </div>
                <div className={styles.bUtton1}>
                  <div className={styles.learnMore}>Learn more</div>
                  <img
                    className={styles.bUttonItem}
                    alt=""
                    src="/arrow-1.svg"
                  />
                </div>
              </div>
            </div>
            <img
              className={styles.frameItem}
              loading="eager"
              alt=""
              src="/rectangle-468@2x.png"
            />
          </div>
        </div>
        <div className={styles.applicationBox}>
          <div className={styles.applicationBoxChild} />
          <div className={styles.businessCoaching1}>BUSINESS COACHING</div>
        </div>
        <div className={styles.applicationBox1}>
          <div className={styles.applicationBoxItem} />
          <div className={styles.marketing}>marketing</div>
        </div>
        <div className={styles.applicationBox2}>
          <div className={styles.applicationBoxInner} />
          <div className={styles.technology}>technology</div>
        </div>
      </div>
    </section>
  );
};

export default EmailAddressInput;
