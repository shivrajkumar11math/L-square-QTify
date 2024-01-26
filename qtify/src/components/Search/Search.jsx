import React from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";

const Search = ({ placeholder }) => {
  return (
    <form className={styles.wrapper}>
      <div>
        <input className={styles.search} placeholder={placeholder} />
      </div>
      <div>
        <button type="submit" className={styles.searchButton}>
          <SearchIcon />
        </button>
      </div>
    </form>
  );
};

export default Search;
