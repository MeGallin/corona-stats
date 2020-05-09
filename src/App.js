import React from 'react';
import { Home, TableStats, Footer } from './components';
import styles from './App.module.css';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Home />
        <TableStats />
        <Footer />
      </React.Fragment>
    );
  }
}
export default App;
