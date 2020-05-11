import axios from 'axios';

const url = ' https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
  let changeableURL = url;
  if (country) {
    changeableURL = `${url}/countries/${country}`;
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeableURL);

    return {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
  } catch (error) {
    console.log(error);
  }
};

// Graph data
export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

// Fetch country data
export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    return countries.map((country) => country.name);
    // console.log(res);
  } catch (error) {
    console.log(error);
  }
};

// Fetch more detailed info
export const fetchDetailedData = async () => {
  try {
    const url = 'https://disease.sh/v2/countries?yesterday=true&sort=recovered';
    // const url = './assets/devData.json';
    const tableData = await axios.get(url);
    return tableData.data;
  } catch (error) {
    console.log(error);
  }
};

// Post contact from data.
export const postContactForm = async (message) => {
  const baseUrl = 'https://www.covid19.livenotice.co.uk/assets/';
  const apiUrl = 'contactFormHandler.php';
  const url = baseUrl + apiUrl;
  await axios
    .post(url, message)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => console.log(error));
};
