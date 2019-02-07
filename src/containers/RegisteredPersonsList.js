import React, { Component } from 'react'

import NavigationBar from '../components/RegisteredPersonsList/AppBar'
import PersonsList from '../components/RegisteredPersonsList/PersonsList'
import { withStyles } from '@material-ui/core';
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'

const styles = theme => ( {
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  }
} )

class RegisteredPersonsList extends Component {

  render() {
    const { classes } = this.props

    return(
      <div>
        <NavigationBar />

        <PersonsList />

        <Fab className={classes.fab} color="secondary">
          <AddIcon />
        </Fab>
      </div>
    )
  }
}

export default withStyles( styles )( RegisteredPersonsList )