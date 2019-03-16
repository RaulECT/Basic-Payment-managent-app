import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core/Modal'
import TextField from '@material-ui/core/TextField'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import inscriptionsTypes from '../../../types'

const getModalStyle = () => {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  }
}

const rendeTypesOptions = () => {
  return inscriptionsTypes.map( type => <MenuItem key={`opt_${type.id}`} value={ type.id } >{type.title}</MenuItem> )
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: '70%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none'
  },
  amountField: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2
  },
  transportField: {
    marginBottom: theme.spacing.unit * 6
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
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
})

const AddPersonModal = ( { isOpen, classes, onClose, onCreate, type, onChangeType } ) => {
  const typesOptions = rendeTypesOptions()

  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={isOpen}
      onClose={ onClose }
    >
      <div
        className={classes.paper}
        style={getModalStyle()}
      >
        <Typography variant="h6" id="modal-title">
          Agregar nuevo registro
        </Typography>
        
        <form
          className={classes.container}
          onSubmit={ onCreate }
        >
          <TextField 
            id="person-name"
            name="personName"
            label="Nombre"
            className={classes.textField}
            margin="normal"
          />

          <FormControl
            fullWidth
          >
            <InputLabel htmlFor="incription-type">
              Tipo de Inscripción
            </InputLabel>
            <Select
              value={ type }
              input={<Input name="incription-type" id="incription-type" />}
              displayEmpty
              name="incription-type"
              onChange={ onChangeType }
            >
              {typesOptions}
            </Select> 
          </FormControl>

          <FormControl 
            fullWidth 
            className={classes.amountField}
          >
            <InputLabel htmlFor="first-amount">Primer Pago</InputLabel>
            <Input 
              id="first-amount"
              name="firstAmount"
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
            />
          </FormControl>

          <FormControl 
            fullWidth 
            component="fieldset"
            className={ classes.transportField }
          >
            <RadioGroup
              id="transport"
              name="transport"
            >
              <FormControlLabel value="true" control={ <Radio /> } label="Con transporte" />
              <FormControlLabel value="false" control={ <Radio /> } label="Sin transporte" />
            </RadioGroup>
          </FormControl>
          
          <Button 
            variant="contained" 
            color="primary"
            className={ classes.button }
            type="submit"
          >
            Agregar
          </Button>
          <Button onClick={ onClose }>Cancelar</Button>
        </form>
      </div>
    </Modal>
  )
}

AddPersonModal.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles( styles )( AddPersonModal )