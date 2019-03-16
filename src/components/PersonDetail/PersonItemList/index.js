import React, { Fragment } from 'react'

import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider'

const personItemList = ( { person, onSelect } ) => {
  const nameSplitted = person.name.split( ' ' )
  const avataraAbreviation = nameSplitted.length === 2 ? `${nameSplitted[0][0]}${nameSplitted[1][0]}` : nameSplitted[0][0]
  const text = (
    <Fragment>
      <Typography 
        color="textSecondary"
        variant="body1"
      >
        { `Saldo a liquidar: $${ person.amountToPay - person.totalAmount}` }
      </Typography>
      
      <Typography 
        color="textSecondary"
        variant="body1"
      >
        { `Tipo: ${ person.inscriptionType}` }
      </Typography>
      
      <Typography 
        color="textSecondary"
        variant="body1"
      >
        { `Ultimo Pago: ${person.lastAmount}` }
      </Typography>
    </Fragment>
  )

  return (
    <Fragment>
      <ListItem key={ person.id } onClick={ () => { onSelect( person ) } } >
        <Avatar>{ avataraAbreviation.toUpperCase() }</Avatar>
        <ListItemText 
          primary={person.name}
          secondary={text}
        />
      </ListItem>

      <Divider
        variant="inset"
        component="li"
      />
    </Fragment>
  )
}

export default personItemList