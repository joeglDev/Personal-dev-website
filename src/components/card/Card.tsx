import styles from "./Card.module.css";

interface CardProps {
  title: string;
  textContent: string;
}

export const Card = ({ title, textContent }: CardProps) => {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.textContent}>{textContent}</p>
    </article>
  );
};
