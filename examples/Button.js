'use strict'

import React, { Component } from 'react'
import ReactCSS from 'reactcss'

class Button extends Component {
  classes() {
    return {
      'default': {
        button: {
          height: '30px',
          padding: `0 14px`,
          borderRadius: '4px',
          backgroundColor: this.props.background,
          color: this.props.color || 'inherit',
          alignItems: 'center',
          display: 'inline-flex',
        },
      },
    }
  }

  render() {
    return <div is="button">{ this.props.children || this.props.label }</div>
  }
}

export default ReactCSS(Button)
