import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const styles = theme => ( {
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    marginTop: 10,
    marginBottom: 50
  }
} )

const AmountList = props => {
  const { classes, amounts } = props
  const list = amounts.map( amount => (
    <ListItem key={ amount.date }>
      <ListItemText
        primary={ `Abono de $${amount.amount}` }
        secondary={ amount.date }
      />
    </ListItem>
  ) )

  return (
    <List className={ classes.root }>
      { list }
    </List>
  )
}

AmountList.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles( styles )( AmountList )