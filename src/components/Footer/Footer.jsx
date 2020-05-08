import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <React.Fragment>
      <footer className={styles.footer}>
        <div>
          Site DEVELOPED by
          <a
            href="https://garyallin.uk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gary Allin
          </a>
          .
        </div>
        <div>
          Site HOSTED by
          <a
            href="https://trilogywebsolutions.co.uk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Trilogy Web Solutions
          </a>
          .
        </div>
      </footer>
    </React.Fragment>
  );
};
export default Footer;
