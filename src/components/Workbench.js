'use strict'

import React from 'react'
import ReactCSS from 'reactcss'

import spec from '../../examples/ButtonSpec'

import WorkbenchSidebar from './WorkbenchSidebar'

class Workbench extends React.Component {
  constructor() {
    super()

    // this.state = spec.contexts[Object.keys(spec.contexts)[0]]
  }

  classes() {
    return {
      'default': {
        workbench: {
          Absolute: '0 0 0 0',
          display: 'flex',
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
        { spec }
      </div>
    )
  }
}

export default ReactCSS(Workbench)
