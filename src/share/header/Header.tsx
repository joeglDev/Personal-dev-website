import { LightDarkModeToggle } from "@/share/header/LightDarkModeToggle";
import styles from "./Header.module.css";
import { Navigation } from "./Navigation";

export const Header = () => {
  return (
    <header className={styles.horizontalFlexBox}>
      <Navigation/>
      <LightDarkModeToggle />
    </header>
  );
};
