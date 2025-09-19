import { TimelineProps } from "./timeline.types";
import styles from "./Timeline.module.css";
import { TimelineItem } from "@/components/timeline/TimelineItem";

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
