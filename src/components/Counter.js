import React from 'react'

export const Counter = props => {
  return (
    <table className="counter">
    <tbody>
      <tr>
        <td>Attending:</td>
        <td>{props.attending}</td>
      </tr>
      <tr>
        <td>Unconfirmed:</td>
        <td>{props.unconfirmed}</td>
      </tr>
      <tr>
        <td>Total:</td>
        <td>{props.totalInvited}</td>
      </tr>
    </tbody>
  </table>
  )
}
