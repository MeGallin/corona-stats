import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header, Home, TableStats, Footer } from './components';
import styles from './App.css';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/home" exact={true} component={Home} />
            <Route path="/table-stats" exact={true} component={TableStats} />
          </Switch>
          <Footer />
        </Router>
      </React.Fragment>
    );
  }
}
export default App;
