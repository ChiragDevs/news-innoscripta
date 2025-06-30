import { useState } from "react";
import styles from "./filters.module.css";
import { setFilters } from "../../services/redux/news-slice";
import { useDispatch, useSelector } from "react-redux";

const Filters = () => {
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [source, setSource] = useState("");
  const { sources, categories } = useSelector((state) => ({
    sources: state.sources,
    categories: state.categories,
  }));
  const dispatch = useDispatch();

  // Find Min and Max Date
  const maxDate = new Date().toISOString().slice(0, 10);
  const minDateTemp = new Date();
  minDateTemp.setFullYear(minDateTemp.getFullYear() - 5);
  const minDate = minDateTemp.toISOString().slice(0, 10);

  // Filter change handlers
  const handleDateChange = (e) => {
    setDate(e.target.value);
    dispatch(setFilters({ date: e.target.value }));
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    dispatch(setFilters({ category: e.target.value }));
  };

  const handleSourceChange = (e) => {
    setSource(e.target.value);
    dispatch(setFilters({ source: e.target.value }));
  };

  return (
    <div className={styles["filters-container"]}>
      <input
        type="date"
        value={date}
        onChange={handleDateChange}
        min={minDate}
        max={maxDate}
      />

      <select
        value={category}
        onChange={handleCategoryChange}
        className={styles["categories"]}
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <select
        value={source}
        onChange={handleSourceChange}
        className={styles["sources"]}
      >
        <option value="">All Sources</option>
        {sources.map((source) => (
          <option key={source} value={source}>
            {source}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
