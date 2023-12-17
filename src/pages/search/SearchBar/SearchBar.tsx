import React, { ChangeEvent, useContext } from 'react';
import styles from './SearchBar.module.css';
import { ApolloCtxt } from '../../../core/graphql/store/ApolloContext';

const SearchBar: React.FC = () => {
  const searchContext = useContext(ApolloCtxt);
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
      <div className={styles.input_wrapper}>
        <input
          type="text"
          placeholder="Search for repositories in Github"
          onChange={handleInputChange}
        />
      </div>
    </>
  );
};

export default SearchBar;
