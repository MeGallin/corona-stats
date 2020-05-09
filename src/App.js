import React from 'react';
import { Cards, Chart, CountryPicker, Footer } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import { fetchDetailedData } from './api';
import coronaImage from './images/image.png';

class App extends React.Component {
  state = {
    data: [],
    detailedData: [],
    country: '',
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({
      data: fetchedData,
    });
    const fetchedDetailedData = await fetchDetailedData();
    this.setState({
      detailedData: fetchedDetailedData,
    });
    console.log(this.state.detailedData);
  }

  handleCountryChange = async (country) => {
    // fetch the data
    const fetchedData = await fetchData(country);
    // set state
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="covid-19" />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Cards data={data} />
        <Chart data={data} country={country} />
        <Footer />
      </div>
    );
  }
}
export default App;
