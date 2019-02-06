import React, { Component } from 'react'

import NavigationBar from '../components/RegisteredPersonsList/AppBar'

class RegisteredPersonsList extends Component {

  render() {
    return(
      <div>
        <NavigationBar />
        Registered Person List
      </div>
    )
  }
}

export default RegisteredPersonsList