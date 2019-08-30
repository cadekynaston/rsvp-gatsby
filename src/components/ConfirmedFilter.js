import React from 'react'

export class ConfirmedFilter extends React.Component {
  render() {
    return (
      <label>
        <input
          type="checkbox"
          onChange={this.props.handleSetFiltered}
          checked={this.props.isFiltered} /> Hide those who haven't responded
      </label>
    )
  }
}

