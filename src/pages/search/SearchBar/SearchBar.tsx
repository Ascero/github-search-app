import React, { ChangeEvent, useContext } from 'react';
import styles from './SearchBar.module.css';
import { SearchCtxt } from '../context/SearchContext';
import TextField from '@mui/material/TextField';

const SearchBar: React.FC = () => {
  const searchContext = useContext(SearchCtxt);
  const debounceTimeoutRef = React.useRef<number | null>(null);

  const handleInputChange = (newValue: ChangeEvent<HTMLInputElement>) => {
    if (debounceTimeoutRef.current !== null) {
      clearTimeout(debounceTimeoutRef.current);
    }

    debounceTimeoutRef.current = window.setTimeout(() => {
      searchContext.updateSearchTerm(newValue.target.value);
    }, 300);
  };

  return (
    <>
      <div className={styles.title}>
        <h1>Search for repositories in Github</h1>
      </div>
      <div className={styles.inputWrapper}>
        <TextField
          id="searchTerm"
          label="Search"
          color="primary"
          onChange={handleInputChange}
          placeholder="Start typing here..."
          focused
          InputProps={{
            style: { color: '#FFFFFF' },
          }}
        />
      </div>
    </>
  );
};

export default SearchBar;
