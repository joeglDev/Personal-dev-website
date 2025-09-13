import styles from "./Introduction.module.css";
import Image from "next/image";

// make text media appropriate
// add image
// footer media qieries
// add hobbies
export const Introduction = () => (
  <section className={styles.introductionContainer}>
    <div className={styles.horizontalFlexBox}>
      <h1 className={styles.introductionTitle}>Hi, I&apos;m Joe Gilbert 👋</h1>
      <p className={styles.introductionText}>
        A full-stack developer based in North-West England.
      </p>
    </div>


  </section>
);
