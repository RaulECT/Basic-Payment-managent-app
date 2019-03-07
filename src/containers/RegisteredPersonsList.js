import React, { Component } from 'react'
import moment from 'moment'
import firebase from 'firebase'

import NavigationBar from '../components/RegisteredPersonsList/AppBar'
import PersonsList from '../components/RegisteredPersonsList/PersonsList'
import AddPersonModal from '../components/RegisteredPersonsList/AddPersonModal'

import { withStyles } from '@material-ui/core';
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import Snackbar from '@material-ui/core/Snackbar'

const styles = theme => ( {
  fab: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  }
} )

class RegisteredPersonsList extends Component {

  state = {
    isModalOpen: false,
    isSnackBarOpen: false,
    persons: [],
    personsFiltered: []
  }

  componentDidMount() {
    firebase.database().ref('persons').on( 'value', ( snapshot ) => {
      if( !snapshot.val() ) return false

      const data = []
      const keys = Object.keys( snapshot.val() )

      for (let index = 0; index < keys.length; index++) {
        
        const dataSnap = snapshot.val()[ keys[index] ]
        dataSnap.id = keys[index]
        data.push( dataSnap )
      }

      this.setState( { 
        persons: data,
        personsFiltered: data
       } )
    } )
  }

  closeSnackBar = () => {
    this.setState( { isSnackBarOpen: false } )
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

  onSelectPerson = person => {
    this.props.history.push( {
      pathname: '/person/edit',
      state: { person }
    } )
  }

  onAddPerson = e => {
    e.preventDefault()

    const { personName, firstAmount, transport } = e.target 
    const newPerson = {
      totalAmount: parseInt(firstAmount.value),
      amounts: [{
        amount: parseInt(firstAmount.value),
        date: moment().format('LLL')
      }],
      transport: transport.value,
      name: personName.value,
      lastAmount: moment().format('LLL')
    } 

    firebase.database().ref('persons').push().set( newPerson )
      .then( data => {
        this.setState( {
          isSnackBarOpen: true,
          isModalOpen: false,
        } )
      } )

  }

  render() {
    const { classes } = this.props

    return(
      <div>
        <NavigationBar onSearch={ this.onSearch } />

        <PersonsList 
          data={ this.state.personsFiltered }
          onSelect={ this.onSelectPerson }
        />

        <AddPersonModal 
          isOpen={ this.state.isModalOpen }
          onClose={ this.handleAddModal }
          onCreate={ this.onAddPerson }
        />

        <Fab 
          className={classes.fab} 
          color="secondary"
          onClick={ this.handleAddModal }
        >
          <AddIcon />
        </Fab>

        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          open={this.state.isSnackBarOpen}
          onClose={this.closeSnackBar}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Se ha agregado una nueva persona.</span>}
        />
      </div>
    )
  }
}

export default withStyles( styles )( RegisteredPersonsList )