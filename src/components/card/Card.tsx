import styles from "./Card.module.css";

interface CardProps {
  title: string;
  textContent: string;
}

export const Card = ({ title, textContent }: CardProps) => {
  return (
    <article className={styles.card}>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.textContent}>{textContent}</p>
    </article>
  );
};
