import { LightDarkModeToggle } from "@/share/header/LightDarkModeToggle";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.horizontalFlexBox}>
      <LightDarkModeToggle />
    </header>
  );
};
