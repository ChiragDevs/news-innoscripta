import { Link } from "react-router";
import styles from "./NewsCard.module.css";

const NewsCard = ({ data }) => {
  const { urlToImage, title, source, url, publishedAt } = data;

  return (
    <div className={styles["card-container"]}>
      <div className={styles["card-image"]}>
        <img src={urlToImage} />
      </div>
      <div className={styles["card-content"]}>
        <p className={styles["headline"]}>
          <Link to={url} target="_blank" rel="noopener noreferrer">
            {title}
          </Link>
        </p>

        <p className={styles["source"]}>{source.name}</p>
      </div>
    </div>
  );
};

export default NewsCard;
