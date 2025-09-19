'use client'

import { TimelineItemProps} from "./timeline.types";
import styles from "./Timeline.module.css";
import {useEffect, useRef, useState} from "react";

export const TimelineItem = (props: TimelineItemProps) => {
    const [isVisible, setVisible] = useState(true);
    const containerRef = useRef<HTMLDivElement>(null);

    const { index, title, content } = props;
    const containerStyle = isVisible ? styles["content-is-visible"]: styles["content"];

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });

        if (containerRef.current) {
            observer.observe(containerRef.current);
            // eslint-disable-next-line react-hooks/exhaustive-deps
            return () => observer.unobserve(containerRef.current as Element); // typecast necessary as otherwise complains may be null
        }
    }, []);

    return (
        <article
            key={index}
            className={index % 2 ? styles.containerLeft : styles.containerRight}
        >
            <div ref={containerRef} className={containerStyle}>
                <h3 className={styles.timelineItemHeading}>{title}</h3>
                <p className={styles.timelineContent}>{content}</p>
            </div>
        </article>
    );
};