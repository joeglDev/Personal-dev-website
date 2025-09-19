import { Cards, TechStack } from "./libs";
import styles from "./Competencies.module.css";

export const Competencies = () => {
  return (
    <>
      <h2 className={styles.h2}>Skills and competencies</h2>
      <TechStack />
      <Cards />
    </>
  );
};
