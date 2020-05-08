import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'loading...';
  }

  const deathsPerInfections = () => {
    return (deaths.value / confirmed.value) * 100;
  };
  const remainInfected = () => {
    return confirmed.value - recovered.value - deaths.value;
  };
  const recoveredPerInfection = () => {
    return (recovered.value / confirmed.value) * 100;
  };
  // console.log(remainInfected());
  return (
    <React.Fragment>
      <div className={styles.lastUpdated}>
        Last Updated: {new Date(lastUpdate).toDateString()}
      </div>
      <div className={styles.container}>
        <div className={styles.infected}>
          <div className={styles.title}>infected</div>
          <h3>
            <CountUp
              start={0}
              end={confirmed.value}
              duration={2.5}
              separator=","
            />
          </h3>
        </div>
        <div className={styles.recovered}>
          <div className={styles.title}>recovered</div>
          <h3>
            <CountUp
              start={0}
              end={recovered.value}
              duration={2.5}
              separator=","
            />
          </h3>
        </div>
        <div className={styles.remainInfected}>
          <div className={styles.title}>remain Infected</div>
          <h3>
            <CountUp
              start={0}
              end={remainInfected()}
              duration={2.5}
              separator=","
            />
          </h3>
        </div>
        <div className={styles.deaths}>
          <div className={styles.title}>deaths</div>
          <h3>
            <CountUp
              start={0}
              end={deaths.value}
              duration={2.5}
              separator=","
            />
          </h3>
        </div>
        <div className={styles.stats}>
          <div className={styles.title}>stats</div>
          <div className={styles.title}>Deaths / infected</div>

          <h3>
            <CountUp
              start={0}
              end={deathsPerInfections()}
              decimals={2}
              suffix=" %"
              duration={2.5}
            />
          </h3>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Cards;
