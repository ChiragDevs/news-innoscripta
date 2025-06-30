import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchNews } from "../../services/redux/redux-thunk";
import styles from "./search.module.css";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();

  const onSearch = async () => {
    dispatch(searchNews(keyword));
  };

  return (
    <div className={styles["search-container"]}>
      <input
        type="text"
        placeholder="Search articles..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className={styles["search-input"]}
      />
      <button onClick={onSearch} className={styles["search-button"]}>
        Search
      </button>
    </div>
  );
};

export default Search;
