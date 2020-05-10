import React, { useState, useEffect } from 'react';
import styles from './TableStats.module.css';
import { fetchDetailedData } from '../../api';

const TableStats = () => {
  const [fetchTableData, setFetchTableData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortType, SetSortType] = useState(null);

  useEffect(() => {
    const fetchedDetailedData = async () => {
      setFetchTableData(await fetchDetailedData());
    };
    fetchedDetailedData();
  }, [setFetchTableData]);

  let handleSearch = (e) => {
    setSearchTerm(e.target.value);
    SetSortType(null);
    console.log(searchTerm);
  };

  const filteredTableData = fetchTableData.filter((country) => {
    return (
      country.country.toLowerCase().indexOf(searchTerm.toLocaleLowerCase()) !==
      -1
    );
  });

  let sortedTableData = [...fetchTableData];

  let sortByCasesUp = (a, b) => {
    return parseInt(a.cases) - parseInt(b.cases);
  };

  let sortByCasesDown = (a, b) => {
    return parseInt(b.cases) - parseInt(a.cases);
  };

  let sortByDeathsUp = (a, b) => {
    return parseInt(a.deaths) - parseInt(b.deaths);
  };

  let sortByDeathsDown = (a, b) => {
    return parseInt(b.deaths) - parseInt(a.deaths);
  };

  let sortByCountryUp = (a, b) => {
    if (a.country > b.country) return 1;
    else if (a.country === b.country) return 0;
    else return -1;
  };

  let sortByCountryDown = (a, b) => {
    if (a.country < b.country) return 1;
    else if (a.country === b.country) return 0;
    else return -1;
  };

  if (sortType !== null) {
    if (sortType === 'cases_up') {
      sortedTableData.sort(sortByCasesUp);
    }
    if (sortType === 'cases_down') {
      sortedTableData.sort(sortByCasesDown);
    }
    if (sortType === 'country_up') {
      sortedTableData.sort(sortByCountryUp);
    }
    if (sortType === 'country_down') {
      sortedTableData.sort(sortByCountryDown);
    }
    if (sortType === 'deaths_up') {
      sortedTableData.sort(sortByDeathsUp);
    }
    if (sortType === 'deaths_down') {
      sortedTableData.sort(sortByDeathsDown);
    }
  }

  let mapData = () => {
    console.log(sortType);

    if (sortType !== null) {
      return sortedTableData;
    } else if (filteredTableData.length !== 0) {
      return filteredTableData;
    }
  };

  return (
    <React.Fragment>
      <div className={styles.searchWrapper}>
        <label className={styles.formLabel}>
          Search Country
          <input
            className={styles.formInput}
            type="text"
            value={searchTerm}
            onChange={(e) => handleSearch(e)}
          />
        </label>
        <div>
          <button onClick={() => setSearchTerm('')}>Clear Search</button>
        </div>
      </div>
      {mapData() !== undefined ? (
        <div>
          <div
            className={styles.tableContainer}
            role="table"
            aria-label="Destinations"
          >
            <div className={styles.flexTable} role="rowgroup">
              <div className={styles.flexRow} role="columnheader">
                <div onClick={(e) => SetSortType('country_up')}>
                  <div className={styles.arrowUp}></div>
                </div>
                Country
                <div onClick={(e) => SetSortType('country_down')}>
                  <div className={styles.arrowDown}></div>
                </div>
              </div>
              <div className={styles.flexRow} role="columnheader">
                <div onClick={(e) => SetSortType('cases_up')}>
                  <div className={styles.arrowUp}></div>
                </div>
                Cases
                <div onClick={(e) => SetSortType('cases_down')}>
                  <div className={styles.arrowDown}></div>
                </div>
              </div>
              <div className={styles.flexRow} role="columnheader">
                <div onClick={(e) => SetSortType('deaths_up')}>
                  <div className={styles.arrowUp}></div>
                </div>
                Deaths
                <div onClick={(e) => SetSortType('deaths_down')}>
                  <div className={styles.arrowDown}></div>
                </div>
              </div>
              <div className={styles.flexRow} role="columnheader">
                Active
              </div>
              <div className={styles.flexRow} role="columnheader">
                Tested
              </div>
            </div>

            {mapData().map((res, i) => {
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
                        <h4>{res.cases}</h4>
                      </div>
                      <div>
                        <div className={styles.textSmall}>Cases Today</div>
                        <h4>{res.todayCases}</h4>
                      </div>
                      <div>
                        <div className={styles.textSmall}>Cases/Million</div>
                        <h4>{res.casesPerOneMillion}</h4>
                      </div>
                    </div>
                  </div>
                  <div className={styles.flexRow} role="cell">
                    <div className={styles.innerWrapper}>
                      <div>
                        <div className={styles.textSmall}>Deaths</div>
                        <h4>{res.deaths}</h4>
                      </div>
                      <div>
                        <div className={styles.textSmall}>Deaths Today</div>
                        <h4>{res.todayDeaths}</h4>
                      </div>
                      <div>
                        <div className={styles.textSmall}>Deaths/Million</div>
                        <h4>{res.deathsPerOneMillion}</h4>
                      </div>
                    </div>
                  </div>
                  <div className={styles.flexRow} role="cell">
                    <div className={styles.innerWrapper}>
                      <div>
                        <div className={styles.textSmall}>Recovered</div>
                        <h4>{res.recovered}</h4>
                      </div>
                      <div>
                        <div className={styles.textSmall}>Active</div>
                        <h4>{res.active}</h4>
                      </div>
                      <div>
                        <div className={styles.textSmall}>Critical</div>
                        <h4>{res.critical}</h4>
                      </div>
                    </div>
                  </div>
                  <div className={styles.flexRow} role="cell">
                    <div className={styles.innerWrapper}>
                      <div>
                        <div className={styles.textSmall}>Tested</div>
                        <h4>{res.tests}</h4>
                      </div>
                      <div>
                        <div className={styles.textSmall}>Tests/Million</div>
                        <h4>{res.testsPerOneMillion}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div>
          <div className={styles.loadingWrapper}>LOADING....</div>
        </div>
      )}
    </React.Fragment>
  );
};
export default TableStats;
