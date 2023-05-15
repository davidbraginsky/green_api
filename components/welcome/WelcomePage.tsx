import styles from "./WelcomePage.module.css";
import { FC } from "react";

const WelcomePage: FC = () => {
  return (
    <div className={styles.container}>
      <p>hello there</p>
    </div>
  );
};

export default WelcomePage;
