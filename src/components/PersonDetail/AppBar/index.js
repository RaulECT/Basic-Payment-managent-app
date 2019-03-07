import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import ArrowBack from '@material-ui/icons/ArrowBack'

const styles = theme => ( {
  root: {
    width: '100%'
  },
  backButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  }
} )

const NavigationBar = props => {
  const { classes, title, onBack } = props

  return(
    <div className={ classes.root }>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={ classes.backButton }
            color="inherit"
            aria-label="Open drawer"
            onClick={ onBack }
          >
            <ArrowBack />
          </IconButton>

          <Typography
            className={classes.title}
            variant="h6"
            color="inherit"
            noWrap
          >
            { title }
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

NavigationBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles( styles )( NavigationBar )