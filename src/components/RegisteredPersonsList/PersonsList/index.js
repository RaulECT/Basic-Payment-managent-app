import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'

import PersonListItem from '../../PersonDetail/PersonItemList'

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  },

})

const PersonsList = props => {
  const { classes } = props
  const persons = props.data.map( person => <PersonListItem onSelect={ props.onSelect } person={person} /> )
  
  return(
    <List className={ classes.root }>
      { persons }
    </List>
  )
}

PersonsList.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles( styles )( PersonsList )