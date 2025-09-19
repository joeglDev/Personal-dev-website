import { Timeline } from "@/components/timeline/Timeline";
import styles from "./CareerHistory.module.css";

export const CareerHistory = () => {
  const timelineItems = [
    {
      title: "2024 - Present:  Moody's - Software engineer",
      content:
        "Full-stack development of Moody's Pfaroe PortfolioView product using a Next.Js UI and C# dotNet backend server. Worked with UX designers and product managers to refine features into development tickets.",
    },
    {
      title: "2023 - Moody's - Associate software engineer",
      content:
        "Used React and TypeScript to develop UIs for Moody's Pfaroe PM product line in an agile team. Created ETL pipelines using python and Azure Databricks to process financial information.",
    },
    {
      title: "2020 - Amazon UK - Laboratory scientist",
      content:
        "Worked in a controlled laboratory setting to enable SARS-CoV-2 testing and variant identification using RT-qPCR and Next Generation Sequencing. Maintained controlled documents and ran interdepartmental meetings.",
    },
    {
      title: "2019 - MSci research placement - University of Manchester",
      content:
        " 3 year BSc Hons +  1 year MSc level degree. Conducted academic research into neurodevelopmental disorders using animal models; delivering a scientific report.",
    },
  ];

  return (
    <section>
      <h2 className={styles.title}>Career history</h2>
      <Timeline items={timelineItems} />
    </section>
  );
};
