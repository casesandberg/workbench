import React from 'react'

export default class Example extends React.Component {
  render() {
    return this.props.sidebar ? (
      <div>{ this.props.name }</div>
    ) : (
      <div>example</div>
    )
  }
}
