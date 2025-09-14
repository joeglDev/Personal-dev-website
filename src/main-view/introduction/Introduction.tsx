import styles from "./Introduction.module.css";
import Image from "next/image";

// add image
export const Introduction = () => (
  <section className={styles.introductionContainer}>
    <div className={styles.horizontalFlexBox}>
      <h1 className={styles.introductionTitle}>Hi, I&apos;m Joe Gilbert</h1>
      <p className={styles.introductionText}>
        A full-stack developer based in North-West England.
      </p>
      <p className={styles.introductionText}>Busy with 🪴 | 🐈‍⬛ | 💻</p>
    </div>
  </section>
);
