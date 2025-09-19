"use client";

import { TimelineItemProps } from "./timeline.types";
import styles from "./Timeline.module.css";
import { useCallback, useEffect, useState } from "react";

export const TimelineItem = (props: TimelineItemProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [wasRecentlyVisible, setWasRecentlyVisible] = useState(false);
  const { index, title, content } = props;

  const handleVisibilityChange = useCallback((node: HTMLDivElement | null) => {
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setWasRecentlyVisible(true);
          }
        });
      },
      {
        threshold: 0.1, // Lower threshold reduces flicker
        rootMargin: "50px", // Adds buffer zone
      },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (wasRecentlyVisible && !isVisible) {
      timeoutId = setTimeout(() => {
        setIsVisible(false);
      }, 150); // Short delay to prevent rapid toggling
    }

    return () => clearTimeout(timeoutId);
  }, [isVisible, wasRecentlyVisible]);

  const containerStyle = isVisible
    ? styles["content-is-visible"]
    : styles["content"];

  return (
    <article
      key={index}
      className={index % 2 ? styles.containerLeft : styles.containerRight}
    >
      <div ref={handleVisibilityChange} className={containerStyle}>
        <h3 className={styles.timelineItemHeading}>{title}</h3>
        <p className={styles.timelineContent}>{content}</p>
      </div>
    </article>
  );
};
