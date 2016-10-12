'use strict'

import React from 'react'
import ReactCSS from 'reactcss'
import _ from 'lodash'

import buttonSpec from '../../examples/ButtonSpec'

class Workbench extends React.Component {
  constructor() {
    super()

    const composeSidebar = (example) => {
      const component = example.props.component
      const props = example.props.props
      const examples = example.props.children.map((example) => {
        return {
          name: example.props.name,
          props: example.props.children.props
        }
      })

      return {
        component,
        props,
        examples
      }
    }

    this.spec = composeSidebar(buttonSpec);
    // console.log(this.spec)

    this.state = this.spec.examples[0].props
  }

  renderEditItem = (propName, props) => {
    const isPropCategory = (props) => {

    }
    return <div />
    return (
      <input
        placeholder={ this.state[propName] }
        onChange={ (e) => { this.setState({ [propName]: e.target.value }) } }
      />
    )
  }

  render() {
    return (
      <div style={{ display: 'flex', alignItems: 'stretch', position: 'absolute', top: '20px', right: '0', bottom: '0', left: '0' }}>
        <div style={{ width: '100px' }}>
          { this.spec.examples.map((example, i) => {
            const handleClick = () => {
              this.setState(example.props)
            }
            return <div key={ i } style={ _.isEqual(this.state, example.props) ? { color: 'blue' } : {} } onClick={ handleClick }>{ example.name }</div>
          }) }
          -----
          { _.map(this.spec.props, (props, propName) => {
            return (
              <div key={ propName } style={{ padding: '10px 0 5px' }}>
                { propName }
                { _.map(props, (value, i) => {
                  const handleClick = () => {
                    this.setState({ [propName]: value })
                  }
                  return (
                    <pre key={ i } onClick={ handleClick } style={{ margin: 0 }}>
                      { this.state[propName] === value ? '* ' + value : '  ' + value }
                    </pre>
                  )
                }) }
                { this.renderEditItem(propName, props) }
              </div>
            )
          }) }
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '1' }}>
          { React.createElement(this.spec.component, this.state) }
        </div>
      </div>
    )
  }
}

export default ReactCSS(Workbench)
