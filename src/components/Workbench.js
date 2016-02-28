'use strict'

import React from 'react'
import ReactCSS from 'reactcss'

import spec, { Component } from '../../examples/ButtonSpec'

import WorkbenchSidebar from './WorkbenchSidebar'

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
        content: {
          flex: '1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      },
    }
  }

  handleSelect = (data) => {
    this.setState(data)
  }

  render() {
    return (
      <div is="workbench">
        <div is="sidebar">
          <WorkbenchSidebar {...spec} active={ this.state } onSelect={ this.handleSelect } />
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
