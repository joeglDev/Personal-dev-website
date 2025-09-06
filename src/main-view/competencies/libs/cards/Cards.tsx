import {Card} from "@/components";
import styles from '../../Competencies.module.css';

export const Cards = () => {
    const competencies = [
        {
            title: "NextJs and React UIs",
            textContent: "Used NextJs to allow users to visualise and interact with complex data in financial portfolios. "
        },
        {
            title: "dotNET backends",
            textContent: "Used dotNET to create backend RESTFUL APIs to link dynamic UIs to other microservices and SQL databases."
        },
        {
            title: "Azure Databricks and PySpark",
            textContent: "Used python Pyspark and Azure Databricks to create custom ETL pipelines which processed financial information in CSV files and supplied data to our databases.",
        },
        {
            title: "genAI",
            textContent: "Built genAI agents to process and interpret unstructured PDF data.",
        }
    ];

    return (
        <section className={styles.horizontalFlexContainer}>
            {
                competencies.map(({title, textContent}, index) => <Card key={index} title={title} textContent={textContent}/>)
            }
        </section>
    )
}