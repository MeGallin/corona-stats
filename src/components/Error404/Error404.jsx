import React from 'react';
import styles from './Error404.module.css';
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <React.Fragment>
      <div className={styles.errorWrapper}>
        <h1>ERROR! That page does not exist.</h1>
        <Link className={styles.links} to={'/home'}>
          <h3>Go Home here!</h3>
        </Link>
      </div>
    </React.Fragment>
  );
};
export default Error404;
