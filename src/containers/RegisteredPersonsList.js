import React, { Component } from 'react'

import NavigationBar from '../components/RegisteredPersonsList/AppBar'
import PersonsList from '../components/RegisteredPersonsList/PersonsList'
import AddPersonModal from '../components/RegisteredPersonsList/AddPersonModal'

import { withStyles } from '@material-ui/core';
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'

const styles = theme => ( {
  fab: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  }
} )

const fakeData = [
  { id:'1', name: 'John Doe', totalAmount: 200, lastAmoun: '9 Marzo del 2019' },
  { id:'2', name: 'John Doe', totalAmount: 200, lastAmoun: '9 Marzo del 2019' },
  { id:'3', name: 'John Doe', totalAmount: 200, lastAmoun: '9 Marzo del 2019' },
  { id:'4', name: 'John Doe', totalAmount: 200, lastAmoun: '9 Marzo del 2019' },
  { id:'5', name: 'John Doe', totalAmount: 200, lastAmoun: '9 Marzo del 2019' },
  { id:'6', name: 'John Doe', totalAmount: 200, lastAmoun: '9 Marzo del 2019' },
  { id:'7', name: 'John Doe', totalAmount: 200, lastAmoun: '9 Marzo del 2019' },
  { id:'8', name: 'John Doe', totalAmount: 200, lastAmoun: '9 Marzo del 2019' },
]

class RegisteredPersonsList extends Component {

  state = {
    isModalOpen: false,
    persons: fakeData,
    personsFiltered: fakeData
  }

  handleAddModal = () => {
    this.setState( prevState => {
      return {
        ...prevState,
        isModalOpen: !prevState.isModalOpen
      }
    } )
  }

  onSearch = value => {
    const personsFiltered = this.state.persons.filter( person => {
      const valueLowerCase = value.toLowerCase()
      const nameLowerCase = person.name.toLowerCase()

      return nameLowerCase.includes( valueLowerCase )
    } )

    this.setState( { personsFiltered } )
  }

  render() {
    const { classes } = this.props

    return(
      <div>
        <NavigationBar onSearch={ this.onSearch } />

        <PersonsList 
          data={ this.state.personsFiltered }
        />

        <AddPersonModal 
          isOpen={ this.state.isModalOpen }
          onClose={ this.handleAddModal }
        />

        <Fab 
          className={classes.fab} 
          color="secondary"
          onClick={ this.handleAddModal }
        >
          <AddIcon />
        </Fab>
      </div>
    )
  }
}

export default withStyles( styles )( RegisteredPersonsList )