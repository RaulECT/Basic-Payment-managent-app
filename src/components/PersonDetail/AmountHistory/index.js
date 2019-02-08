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
  const { classes } = props

  return (
    <List className={ classes.root }>
      <ListItem>
        <ListItemText primary="Abono de $100" secondary="Fecha: 12-03-2019" />
      </ListItem>
      
      <ListItem>
        <ListItemText primary="Abono de $100" secondary="Fecha: 12-03-2019" />
      </ListItem>
      
      <ListItem>
        <ListItemText primary="Abono de $100" secondary="Fecha: 12-03-2019" />
      </ListItem>
    </List>
  )
}

AmountList.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles( styles )( AmountList )