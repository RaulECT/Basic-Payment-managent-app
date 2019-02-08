import React, { Component } from 'react';

import RegisteredPersonsList from './containers/RegisteredPersonsList'
import PersonDetail from './containers/PersonDetail'

class App extends Component {
  render() {
    return (
      <PersonDetail />
    );
  }
}

export default App;
