import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setPreferences } from "../../services/redux/news-slice";
import PreferenceSelector from "./selector/selector";
import styles from "./preference-modal.module.css";

const PreferenceModal = ({ setModal }) => {
  const dispatch = useDispatch();
  const { categories, sources, authors, preferences } = useSelector(
    (state) => ({
      sources: state.sources,
      categories: state.categories,
      authors:
        state.authors.length > 10 ? state.authors.slice(0, 10) : state.authors,
      preferences: state.preferences,
    })
  );

  const [selectedCategory, setSelectedCategory] = useState(
    preferences?.category || ""
  );
  const [selectedSources, setSelectedSources] = useState(
    preferences?.sources || []
  );
  const [selectedAuthors, setSelectedAuthors] = useState(
    preferences?.authors || []
  );

  const handleApply = () => {
    const updatedPreferences = {
      category: selectedCategory ? selectedCategory : "general",
      sources: selectedSources,
      authors: selectedAuthors,
    };
    dispatch(setPreferences(updatedPreferences));
    // dispatch(fetchPrefferedNews(updatedPreferences));
    setModal(false);
  };

  return (
    <div className={styles["modal-page"]}>
      <div className={styles["modal-container"]}>
        <div className={styles["preference-container"]}>
          <h3 className={styles["modal-title"]}>Edit Preferences</h3>

          <PreferenceSelector
            title="Categories"
            options={categories}
            selectedOptions={selectedCategory}
            setSelectedOptions={setSelectedCategory}
            type="radio"
          />

          <PreferenceSelector
            title="Sources"
            options={sources}
            selectedOptions={selectedSources}
            setSelectedOptions={setSelectedSources}
          />

          <PreferenceSelector
            title="Authors"
            options={authors}
            selectedOptions={selectedAuthors}
            setSelectedOptions={setSelectedAuthors}
          />
        </div>
        <div className={styles["btn-container"]}>
          <button className={styles["btn-apply"]} onClick={handleApply}>
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreferenceModal;
