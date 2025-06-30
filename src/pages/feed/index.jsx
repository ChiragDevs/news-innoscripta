import { useSelector, useDispatch } from "react-redux";
import NewsCard from "../../components/news/news-card/NewsCard";
import { useState } from "react";
import PreferenceModal from "../../components/preferenceModal/preference-modal";
import styles from "./feed.module.css";

const NewsFeed = () => {
  const data = useSelector((state) => state.preferedFeed);
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);

  return (
    <>
      {modal && <PreferenceModal setModal={setModal} />}
      <div className={styles["feed-container"]}>
        <button
          className={`${styles["btn-preferences"]} ${
            modal ? styles["hide"] : ""
          }`.trim()}
          onClick={() => setModal(true)}
        >
          Edit Preferences
        </button>
        <section className={styles["cards-container"]}>
          {data.length === 0 && (
            <p className={styles["no-pref"]}>
              You have not yet set Preferences..
            </p>
          )}
          {data.map((article) => (
            <NewsCard key={article.title} data={article} />
          ))}
        </section>
      </div>
    </>
  );
};

export default NewsFeed;
