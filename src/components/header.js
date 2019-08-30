import React from 'react'

export const Header = props => {
  return (
    <header>
    <h1>RSVP</h1>
    <p>A Treehouse + Gatsby App</p>
    <form onSubmit={props.handleInviteSubmit}>
        <input
          type="text"
          value={props.pendingGuest}
          placeholder="Invite Someone"
          onChange={e => props.setPendingGuest(e.target.value)} />
        <button
          type="submit"
          name="submit"
          value="submit"
        >
          Submit
        </button>
    </form>
  </header>
  )
}
