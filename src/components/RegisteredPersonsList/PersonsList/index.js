import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  },
  textSecondary: {
    color: 'rgba(0, 0, 0, 0.54)'
  }
})

const PersonsList = props => {
  const { classes } = props
  const text = (
    <Fragment>
      <Typography color="textSecondary" variant="body1">Total Pagado: $200</Typography>
      <Typography color="textSecondary" variant="body1">Ultimo pago: Jan 9, 2014</Typography>
    </Fragment>
  )

  return(
    <List className={ classes.root }>
      <ListItem>
        <Avatar>JD</Avatar>
        <ListItemText primary="John Doe" secondary={text} />
      </ListItem>

      <Divider variant="inset" component="li" />
      <ListItem>
        <Avatar>JD</Avatar>
        <ListItemText primary="John Doe" secondary={text} />
      </ListItem>

      <Divider variant="inset" component="li" />
      <ListItem>
        <Avatar>JD</Avatar>
        <ListItemText primary="John Doe" secondary={text} />
      </ListItem>

      <Divider variant="inset" component="li" />
    </List>
  )
}

PersonsList.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles( styles )( PersonsList )