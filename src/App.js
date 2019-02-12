import React, { Component, Fragment } from 'react';
import {
  HashRouter,
  Route
} from 'react-router-dom'

import RegisteredPersonsList from './containers/RegisteredPersonsList'
import PersonDetail from './containers/PersonDetail'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Fragment>
          <Route exact path="/" component={RegisteredPersonsList} />
          <Route exact path="/persons" component={RegisteredPersonsList} />
          <Route exact path="/person/edit" component={PersonDetail} />
        </Fragment>
      </HashRouter>
    );
  }
}

export default App;
