import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import NavigationBar from '../components/PersonDetail/AppBar'
import AmountHistory from '../components/PersonDetail/AmountHistory'

const styles = theme => ( {
  content: {
    paddingTop: theme.spacing.unit * 5,
    paddingLeft: theme.spacing.unit * 2
  }
} )

class PersonDetail extends Component {

  render() {
    const { classes } = this.props

    return(
      <div>
        <NavigationBar />

        <div className={ classes.content }>
          <Typography 
            component="h4" 
            variant="h4"
          >
            Total pagado: $375
          </Typography>

          <AmountHistory />

          <Button 
            color="primary"
            variant="contained"
          >
            Agregar Pago
          </Button>
        </div>
        
      </div>
    )
  }
}

export default withStyles( styles )( PersonDetail )