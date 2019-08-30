import React from 'react'
import PropTypes from "prop-types"

import { Guest } from './Guest'
import { PendingGuest } from './PendingGuest'

export const GuestList = ({ guests, ...props }) =>  {

  return (
    <ul>
      <PendingGuest name={props.pendingGuest} />
      {
        guests
          .filter(guest => !props.isFiltered || guest.isConfirmed)
          .map((guest, index) =>
          <Guest
            key={index}
            name={guest.name}
            isConfirmed={guest.isConfirmed}
            isEditing={guest.isEditing}
            setName={text => props.setNameAt(text, guest.id)}
            handleConfirmation={() => props.toggleConfirmationAt(guest.id)}
            handleRemoveGuest={() => props.removeGuestAt(guest.id)}
            handleToggleEditing={() => props.toggleIsEditingAt(guest.id)} />
        )
      }
    </ul>
  )
}

GuestList.propTypes = {
  guests: PropTypes.array.isRequired,
  toggleConfirmationAt: PropTypes.func.isRequired,
  toggleIsEditingAt: PropTypes.func.isRequired,
  setNameAt: PropTypes.func.isRequired,
}
