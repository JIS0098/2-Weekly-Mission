import styles from "../styles/SearchInput.module.css";

function SearchInput() {
  return (
    <div className={styles.searchBox}>
      <input className={styles.searchInput} placeholder="링크를 검색해주세요" />
      <img
        className={styles.searchIcon}
        src={`${process.env.PUBLIC_URL}/images/search.png`}
      />
    </div>
  );
}

export default SearchInput;
