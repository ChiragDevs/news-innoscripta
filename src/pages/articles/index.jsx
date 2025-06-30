import styles from "./articles.module.css";
import Filters from "../../components/filters/filters";
import Search from "../../components/search/search";
import NewsCard from "../../components/news/news-card/NewsCard";
import { useSelector } from "react-redux";

const NewsArticles = () => {
  const data = useSelector((state) => state.searchORFiltered);

  return (
    <div className={styles["articles-container"]}>
      <div className={styles["search-filter"]}>
        <Search />
        <Filters />
      </div>
      <section className={styles["cards-container"]}>
        {data.map((article, indx) => (
          <NewsCard key={indx} data={article} />
        ))}
      </section>
    </div>
  );
};

export default NewsArticles;
