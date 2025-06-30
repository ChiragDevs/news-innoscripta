import { Link, NavLink } from "react-router";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles["logo-text"]}>
        <h1>SaMa4</h1>
      </Link>
      <NavLink
        to="/feed"
        className={({ isActive }) => (isActive ? `${styles.active}` : "")}
      >
        Feed
      </NavLink>
    </header>
  );
};

export default Header;
