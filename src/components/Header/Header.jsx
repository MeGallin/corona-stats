import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import coronaImage from '../../images/image.png';

const Header = () => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <div>
          <Link to={'/home'}>
            <img className={styles.image} src={coronaImage} alt="covid-19" />
          </Link>
        </div>
        <div>
          <Link className={styles.links} to={'/home'}>
            Home
          </Link>
          <Link className={styles.links} to={'/table-stats'}>
            Stats
          </Link>
          <Link className={styles.links} to={'/contact'}>
            Contact
          </Link>
        </div>
      </header>
    </React.Fragment>
  );
};
export default Header;
