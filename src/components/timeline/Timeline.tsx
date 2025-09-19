import { TimelineItem } from "./timeline.types";
import styles from "./Timeline.module.css";

interface TimelineProps {
  items: TimelineItem[];
}

export const Timeline = ({ items }: TimelineProps) => {
  return (
    <div className={styles.timeline}>
      {items.map(({ title, content }, index) => (
        <article
          key={index}
          className={index % 2 ? styles.containerLeft : styles.containerRight}
        >
          <div className={styles.content}>
            <h3>{title}</h3>
            <p>{content}</p>
          </div>
        </article>
      ))}
    </div>
  );
};
