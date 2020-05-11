import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Header, Home, TableStats, Error404, Footer } from './components';
import styles from './App.css';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact={true}>
              <Redirect to="/home" />
            </Route>
            <Route path="/home" exact={true} component={Home} />
            <Route path="/table-stats" exact={true} component={TableStats} />
            <Route component={Error404} />
          </Switch>
          <Footer />
        </Router>
      </React.Fragment>
    );
  }
}
export default App;
