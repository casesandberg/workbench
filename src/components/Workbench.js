'use strict'

import React from 'react'
import ReactCSS from 'reactcss'
var fs = require('fs')

import Button from '../../examples/Button'

class Workbench extends React.Component {
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

  render() {
    return (
      <div is="workbench">
        <div is="sidebar">
          <div is="header">Workbench</div>
        </div>
        <div is="content">
          <div is="render">

            <Button label="Click Me" background="#ddd" color="#333" />

          </div>
        </div>
      </div>
    )
  }
}

export default ReactCSS(Workbench)
