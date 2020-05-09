import React, { useState, useEffect } from 'react';
import styles from './TableStats.module.css';
import { fetchDetailedData } from '../../api';
import CountUp from 'react-countup';

const TableStats = () => {
  const [fetchTableData, setFetchTableData] = useState([]);
  useEffect(() => {
    const fetchedDetailedData = async () => {
      setFetchTableData(await fetchDetailedData());
    };
    fetchedDetailedData();
  }, [setFetchTableData]);

  return (
    <React.Fragment>
      <div
        className={styles.tableContainer}
        role="table"
        aria-label="Destinations"
      >
        <div className={styles.flexTable} role="rowgroup">
          <div className={styles.flexRow} role="columnheader">
            Country
          </div>
          <div className={styles.flexRow} role="columnheader">
            Cases
          </div>
          <div className={styles.flexRow} role="columnheader">
            Deaths
          </div>
          <div className={styles.flexRow} role="columnheader">
            Active
          </div>
          <div className={styles.flexRow} role="columnheader">
            Tested
          </div>
        </div>

        {fetchTableData.map((res, i) => {
          console.log(res);
          return (
            <div key={i} className={styles.flexTable} role="rowgroup">
              <div className={styles.flexRow} role="cell">
                <div className={styles.innerWrapperCountry}>
                  <div>{res.country}</div>
                  <div className={styles.textMedium}>
                    <div className={styles.textSmall}>Last Updated</div>
                    {new Date(res.updated).toDateString()}
                  </div>
                </div>
              </div>
              <div className={styles.flexRow} role="cell">
                <div className={styles.innerWrapper}>
                  <div>
                    <div className={styles.textSmall}>Cases</div>
                    <CountUp
                      start={0}
                      end={res.cases}
                      duration={2.5}
                      separator=","
                    />
                  </div>
                  <div>
                    <div className={styles.textSmall}>Cases Today</div>
                    <CountUp
                      start={0}
                      end={res.todayCases}
                      duration={2.5}
                      separator=","
                    />
                  </div>
                  <div>
                    <div className={styles.textSmall}>Cases/Million</div>
                    <CountUp
                      start={0}
                      end={res.casesPerOneMillion}
                      duration={2.5}
                      separator=","
                    />
                  </div>
                </div>
              </div>
              <div className={styles.flexRow} role="cell">
                <div className={styles.innerWrapper}>
                  <div>
                    <div className={styles.textSmall}>Deaths</div>
                    <CountUp
                      start={0}
                      end={res.deaths}
                      duration={2.5}
                      separator=","
                    />
                  </div>
                  <div>
                    <div className={styles.textSmall}>Deaths Today</div>
                    <CountUp
                      start={0}
                      end={res.todayDeaths}
                      duration={2.5}
                      separator=","
                    />
                  </div>
                  <div>
                    <div className={styles.textSmall}>Deaths/Million</div>
                    <CountUp
                      start={0}
                      end={res.deathsPerOneMillion}
                      duration={2.5}
                      separator=","
                    />
                  </div>
                </div>
              </div>
              <div className={styles.flexRow} role="cell">
                <div className={styles.innerWrapper}>
                  <div>
                    <div className={styles.textSmall}>Recovered</div>
                    <CountUp
                      start={0}
                      end={res.recovered}
                      duration={2.5}
                      separator=","
                    />
                  </div>
                  <div>
                    <div className={styles.textSmall}>Active</div>
                    <CountUp
                      start={0}
                      end={res.active}
                      duration={2.5}
                      separator=","
                    />
                  </div>
                  <div>
                    <div className={styles.textSmall}>Critical</div>
                    <CountUp
                      start={0}
                      end={res.critical}
                      duration={2.5}
                      separator=","
                    />
                  </div>
                </div>
              </div>
              <div className={styles.flexRow} role="cell">
                <div className={styles.innerWrapper}>
                  <div>
                    <div className={styles.textSmall}>Tested</div>
                    <CountUp
                      start={0}
                      end={res.tests}
                      duration={2.5}
                      separator=","
                    />
                  </div>
                  <div>
                    <div className={styles.textSmall}>Tests/Million</div>
                    <CountUp
                      start={0}
                      end={res.testsPerOneMillion}
                      duration={2.5}
                      separator=","
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};
export default TableStats;
