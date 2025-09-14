import styles from "./Timeline.module.css";

export const Timeline = () => {
  return (
    <>
      <h2 className={styles.timelineTitle}>Career history</h2>

      <section className={styles.timeline}>
        <div className={styles.containerLeft}>
          <div className={styles.content}>
            <h3>Present</h3>
            <p>Lorem ipsum..</p>
          </div>
        </div>
        <div className={styles.containerRight}>
          <div className={styles.content}>
            <h3>2024 - Moody&apos;s - Software engineer</h3>
            <p>Lorem ipsum..</p>
          </div>
        </div>

        <div className={styles.containerLeft}>
          <div className={styles.content}>
            <h3>2023 - Moody&apos;s - Associate software engineer</h3>
            <p>Lorem ipsum..</p>
          </div>
        </div>
        <div className={styles.containerRight}>
          <div className={styles.content}>
            <h3>2020 - Amazon UK - Laboratory scientist</h3>
            <p>Lorem ipsum..</p>
          </div>
        </div>

        <div className={styles.containerLeft}>
          <div className={styles.content}>
            <h3>2019 - MSci research placement - University of Manchester</h3>
            <p>Lorem ipsum..</p>
          </div>
        </div>
      </section>
    </>
  );
};
