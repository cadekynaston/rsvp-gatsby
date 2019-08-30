import React from 'react'
import PropTypes from "prop-types"

export const PendingGuest = ({ name }) => (
  name &&
    <li className="pending">
      <span>
        {name}
      </span>
    </li>
)

PendingGuest.propTypes = {
  name: PropTypes.string.isRequired,
}
