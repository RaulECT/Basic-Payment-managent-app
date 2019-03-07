import React, { Component } from 'react'
import moment from 'moment'
import firebase from 'firebase'

import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import NavigationBar from '../components/PersonDetail/AppBar'
import AmountHistory from '../components/PersonDetail/AmountHistory'
import AddAmountModal from '../components/PersonDetail/AddAmountModal'

const styles = theme => ( {
  content: {
    paddingTop: theme.spacing.unit * 5,
    paddingLeft: theme.spacing.unit * 2
  }
} )

class PersonDetail extends Component {

  state = {
    isAddAmounModalOpen: false,
    person: null
  }

  componentDidMount() {
    if ( this.props.location.state ) {
      this.setState( { person: this.props.location.state.person } )
    }
  }

  handleAddAmountModal = () => {
    this.setState( pervState => {
      return {
        isAddAmounModalOpen: !pervState.isAddAmounModalOpen
      }
    } )
  }

  onAddAmount = e => {
    e.preventDefault()

    const { person } = this.state
    const amounts = [ ...person.amounts ]
    const personUpdated = { ...person }

    personUpdated.amounts = amounts.concat( {
      amount: parseInt(e.target.amount.value),
      date: moment().format('LLL')
    } )
    console.log( person )
    personUpdated.totalAmount = this.calulateNewTotal( personUpdated.amounts )
    firebase.database().ref(`persons/${ person.id }`).set( personUpdated )

    this.setState( { 
      person: personUpdated,
      isAddAmounModalOpen: false
     } )
  }

  calulateNewTotal = amounts => {
    let newAmount = 0

    amounts.map( amount => newAmount = newAmount + amount.amount )

    return newAmount
  }

  render() {
    const { classes } = this.props
    const { isAddAmounModalOpen, person } = this.state
    let title = person ? person.name : ''
    let totalAmount = person ? person.totalAmount : ''
    let amounts = person ? person.amounts : []

    return(
      <div>
        <NavigationBar 
          title={ title } 
          onBack={ this.props.history.goBack }
        />

        <div className={ classes.content }>
          <Typography 
            component="h4" 
            variant="h4"
          >
            Total pagado: ${ totalAmount }
          </Typography>

          <AmountHistory
            amounts={ amounts }
          />

          <Button 
            color="primary"
            variant="contained"
            onClick={ this.handleAddAmountModal }
          >
            Agregar Pago
          </Button>
        </div>

        <AddAmountModal 
          isOpen={ isAddAmounModalOpen }
          onCancel={ this.handleAddAmountModal }
          onSubmit={ this.onAddAmount }
        />
        
      </div>
    )
  }
}

export default withStyles( styles )( PersonDetail )