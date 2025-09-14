import styles from './Header.module.css';
import Link from "next/link";

// TODO: implement mobile responsive navigation solution
export const Navigation = () => (
    <nav className={styles.navFlexBox}>
         <Link className={styles.navLink} href="/">Home</Link>
         <Link className={styles.navLink} href="/perlin-noise">Perlin noise</Link>
    </nav>
)