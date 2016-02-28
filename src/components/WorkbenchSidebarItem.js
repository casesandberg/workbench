'use strict'

import React from 'react'
import ReactCSS from 'reactcss'

class WorkbenchSidebarItem extends React.Component {
  classes() {
    return {
      'default': {
        item: {

        },
      },
      'active': {
        item: {
          background: '#aeee00',
        },
      },
    }
  }

  render() {
    return (
      <div is="item" onClick={ this.props.onClick.bind(this, this.props.data) }>- { this.props.label }</div>
    )
  }
}

export default ReactCSS(WorkbenchSidebarItem)
