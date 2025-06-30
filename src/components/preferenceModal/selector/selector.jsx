import styles from "./selector.module.css";

const PreferenceSelector = ({
  title,
  options,
  selectedOptions,
  setSelectedOptions,
}) => {
  const toggleSelection = (item) => {
    if (selectedOptions.includes(item)) {
      setSelectedOptions(selectedOptions.filter((i) => i !== item));
    } else {
      setSelectedOptions([...selectedOptions, item]);
    }
  };

  return (
    <div className={styles["selector-content"]}>
      <p className={styles["selector-title"]}>{title}</p>
      <div className={styles["selectors"]}>
        {options?.map((option) => (
          <button
            key={option}
            className={`${styles["btn-selectors"]} ${
              selectedOptions.includes(option) ? `${styles["selected"]}` : ``
            }`}
            onClick={() => toggleSelection(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PreferenceSelector;
