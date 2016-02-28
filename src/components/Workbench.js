'use strict'

import React from 'react'
import ReactCSS from 'reactcss'
import _ from 'lodash'

import spec, { Component } from '../../examples/ButtonSpec'

class Workbench extends React.Component {
  constructor() {
    super()

    this.state = spec.contexts[Object.keys(spec.contexts)[0]]
  }

  classes() {
    return {
      'default': {
        workbench: {
          Absolute: '0 0 0 0',
          display: 'flex',
        },
        sidebar: {
          width: '200px',
          borderRight: '1px solid #aaa',
        },
        header: {
          height: '30px',
          lineHeight: '30px',
          fontSize: '14px',
          color: '#333',
          background: '#f9f9f9',
          borderBottom: '1px solid #ccc',
          textAlign: 'right',
          paddingRight: '10px',
        },
        content: {
          flex: '1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      },
    }
  }

  handleClick = (data) => {
    this.setState(data)
  }

  handlePropChange = (data) => {
    this.setState(data)
  }

  render() {
    return (
      <div is="workbench">
        <div is="sidebar">
          <div is="header">Workbench</div>

          { _.map(spec.contexts, (context, contextName) => {
            return <div key={ contextName } onClick={ this.handleClick.bind(this, context) }>{ contextName }</div>
          }) }

          <hr />

            { _.map(spec.props, (props, propName) => {
              return (
                <div key={ propName }>
                  { propName }
                  { _.map(props, (propValue) => {
                    return <div key={ propValue } onClick={ this.handlePropChange.bind(this, { [propName]: propValue }) }>- { propValue }</div>
                  }) }
                </div>
              )
            }) }
        </div>
        <div is="content">
          <div is="render">

            <Component {...this.state} />

          </div>
        </div>
      </div>
    )
  }
}

export default ReactCSS(Workbench)
