import React, { Component } from 'react'
import moment from 'moment'
import firebase from 'firebase'

import NavigationBar from '../components/RegisteredPersonsList/AppBar'
import PersonsList from '../components/RegisteredPersonsList/PersonsList'
import AddPersonModal from '../components/RegisteredPersonsList/AddPersonModal'
import inscriptionsTypes from '../types'

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
    personsFiltered: [],
    typeSelected: 0,
    snapshot: {}
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
        personsFiltered: data,
        snapshot: snapshot.val()
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
      state: { person, onDelete: this.onDelete }
    } )
  }

  onAddPerson = e => {
    e.preventDefault()

    const { typeSelected } = this.state
    const type = inscriptionsTypes[ typeSelected ]
    const { personName, firstAmount, transport } = e.target 
    const amount = isNaN( parseInt(firstAmount.value) ) ? 0 : parseInt(firstAmount.value)
    const amountToPay = transport.value === 'true' ? parseInt(type.withTransportPrice) : parseInt(type.withoutTransportPrice)
    const newPerson = {
      totalAmount: amount,
      amounts: [{
        amount: amount,
        date: moment().format('LLL')
      }],
      transport: transport.value,
      name: personName.value,
      lastAmount: moment().format('LLL'),
      inscriptionType: type.title,
      amountToPay: amountToPay,
      isFullPage: type.title === 'De 0 a 5 años' ? true : amountToPay === amount ? true : false,
      
    } 
  
    firebase.database().ref('persons').push().set( newPerson )
      .then( data => {
        this.setState( {
          isSnackBarOpen: true,
          isModalOpen: false,
          typeSelected: 0
        } )
      } )

  }

  onChangeType = event => {
    this.setState( {
      typeSelected: event.target.value
    } )
  }

  onDelete = id => {
    firebase.database().ref('persons').child( id ).remove()
    .then( data => {
      this.props.history.push( '/' )
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
          type={ this.state.typeSelected }
          onChangeType={ this.onChangeType }
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