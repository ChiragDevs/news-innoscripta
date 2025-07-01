import styles from "./selector.module.css";

const PreferenceSelector = ({
  title,
  options,
  selectedOptions,
  setSelectedOptions,
  type = "checkbox",
}) => {
  const toggleSelection = (item) => {
    if (selectedOptions.includes(item)) {
      setSelectedOptions(selectedOptions.filter((i) => i !== item));
    } else {
      setSelectedOptions([...selectedOptions, item]);
    }
  };

  const handleRadioChange = (item) => {
    setSelectedOptions(item);
  };

  return (
    <div className={styles["selector-content"]}>
      <p className={styles["selector-title"]}>{title}</p>
      <div className={styles["selectors"]}>
        {type === "radio" ? (
          <>
            {options?.map((option) => (
              <label
                key={option}
                htmlFor={title}
                className={styles["checkbox-label"]}
              >
                <input
                  type={type}
                  id={title}
                  name={title}
                  value={option}
                  checked={selectedOptions === option}
                  onChange={() => handleRadioChange(option)}
                  className={styles["checkbox-input"]}
                />
                {option}
              </label>
            ))}
          </>
        ) : (
          <>
            {options?.map((option) => (
              <label key={option} className={styles["checkbox-label"]}>
                <input
                  type={type}
                  name={title}
                  checked={selectedOptions.includes(option)}
                  onChange={() => toggleSelection(option)}
                  className={styles["checkbox-input"]}
                />
                {option}
              </label>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default PreferenceSelector;

{
  /* <button
  key={option}
  className={`${styles["btn-selectors"]} ${
    selectedOptions.includes(option) ? styles["selected"] : ``
  }`}
  onClick={() => toggleSelection(option)}
>
  {option}
</button> */
}
