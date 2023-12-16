import React from 'react';
import styles from './Header.module.css';
import reactLogo from '../../assets/react.svg';

const Header: React.FC<{ children?: React.ReactNode }> = (props) => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={reactLogo} alt="App logo" />
      </div>
      {props.children}
    </div>
  );
};

export default Header;
