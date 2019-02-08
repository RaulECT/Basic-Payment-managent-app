import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core/Modal'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Button from '@material-ui/core/Button'

const getModalStyle = () => {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  }
}

const styles = theme => ( {
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: 0,
    marginRight: theme.spacing.unit,
    width: '100%',
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  button: {
    marginRight: 10
  },
  amountField: {
    marginTop: 20,
    marginBottom: 20
  }
} )

const AddAmountModal = ( { isOpen, classes } ) => {

  return(
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={isOpen}
      onClose={ () => {} }
    >
      <div
        className={ classes.paper }
        style={ getModalStyle() }
      >
        <Typography
          variant="h6"
          id="modal-title"
        >
          Agregar nuevo Pago
        </Typography>

        <form
          className={ classes.container }
        >
          <FormControl
            fullWidth
            className={ classes.amountField }
          >
            <InputLabel htmlFor="new-amount">Nuevo Pago</InputLabel>
            <Input 
              id="new-amount"
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
            />
          </FormControl>

          <Button
            variant="contained"
            color="primary"
            className={ classes.button }
          >
            Agregar
          </Button>
          <Button>Cancelar</Button>
        </form>
      </div>
    </Modal>
  )
}

AddAmountModal.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles( styles )( AddAmountModal )