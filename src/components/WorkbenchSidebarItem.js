'use strict'

import React from 'react'
import ReactCSS from 'reactcss'

class WorkbenchSidebarItem extends React.Component {
  classes() {
    return {
      'default': {
        item: {
          color: '#666',
        },
        check: {
          color: '#fff',
        },
      },
      'active': {
        item: {
          color: '#333',
        },
        check: {
          color: '#333',
        },
      },
    }
  }

  render() {
    return (
      <div is="item" onClick={ this.props.onClick.bind(this, this.props.data) }><span is="check">•</span> { this.props.label }</div>
    )
  }
}

export default ReactCSS(WorkbenchSidebarItem)
