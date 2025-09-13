import styles from "./Introduction.module.css";

export const Introduction = () => (
  <section className={styles.introductionContainer}>
    <div className={styles.horizontalFlexBox}>
      <h1 className={styles.introductionTitle}>Hi, I&apos;m Joe Gilbert 👋</h1>
      <p className={styles.introductionText}>
        and i&apos;m a full-stack developer based in North-West England.
      </p>
    </div>
  </section>
);
