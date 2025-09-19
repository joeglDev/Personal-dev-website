import { Timeline } from "@/components/timeline/Timeline";
import styles from "./CareerHistory.module.css";

// todo add content
// fix dark mode

//fix responsveness

export const CareerHistory = () => {
  const timelineItems = [
    {
      title: "2024 - Present:  Moody's - Software engineer",
      content: "",
    },
    {
      title: "2023 - Moody's - Associate software engineer",
      content: "",
    },
    {
      title: "2020 - Amazon UK - Laboratory scientist",
      content: "",
    },
    {
      title: "2019 - MSci research placement - University of Manchester",
      content: "",
    },
  ];

  return (
    <section>
      <h2 className={styles.title}>Career history</h2>
      <Timeline items={timelineItems} />
    </section>
  );
};
