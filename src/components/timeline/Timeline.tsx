import { TimelineItemProps, TimelineProps } from "./timeline.types";
import styles from "./Timeline.module.css";

const TimelineItem = (props: TimelineItemProps) => {
  const { index, title, content } = props;
  return (
    <article
      key={index}
      className={index % 2 ? styles.containerLeft : styles.containerRight}
    >
      <div className={styles.content}>
        <h3 className={styles.timelineItemHeading}>{title}</h3>
        <p className={styles.timelineContent}>{content}</p>
      </div>
    </article>
  );
};

export const Timeline = ({ items }: TimelineProps) => {
  return (
    <div className={styles.timeline}>
      {items.map(({ title, content }, index) => (
        <TimelineItem
          key={index}
          index={index}
          title={title}
          content={content}
        />
      ))}
    </div>
  );
};
