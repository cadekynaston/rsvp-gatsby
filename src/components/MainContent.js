import React from 'react'

import { GuestList } from '../components/GuestList';
import { Counter } from '../components/Counter'
import { ConfirmedFilter } from './ConfirmedFilter';

export const MainContent = props => {

  return (
    <div className="main">
      <div>
        <h2>Invitees</h2>
        <ConfirmedFilter
          handleSetFiltered={props.toggleSetFiltered}
          checked={props.isFiltered} />
      </div>
      <Counter
        totalInvited={props.totalInvited}
        unconfirmed={props.totalInvited - props.getConfirmed}
        attending={props.getConfirmed} />
      <GuestList
        guests={props.guests}
        setNameAt={props.setNameAt}
        pendingGuest={props.pendingGuest}
        toggleConfirmationAt={props.toggleConfirmationAt}
        toggleIsEditingAt={props.toggleIsEditingAt}
        removeGuestAt={props.removeGuestAt}
        isFiltered={props.isFiltered} />
    </div>
  )
}
