import React from 'react';
import styles from './Header.module.css';
import reactLogo from '../../assets/react.svg';
import { NavLink, useLocation } from 'react-router-dom';
import { Button } from '@mui/material';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <NavLink to="/">
          <img src={reactLogo} alt="App logo" />
        </NavLink>
      </div>
      {location.pathname === '/' ? (
        <NavLink to="/favorites">
          <Button variant="contained" size="small">
            My Favorites
          </Button>
        </NavLink>
      ) : (
        <NavLink to="/">
          <Button variant="contained" size="small">
            Back to search
          </Button>
        </NavLink>
      )}
    </div>
  );
};

export default Header;
