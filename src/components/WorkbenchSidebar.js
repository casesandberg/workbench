'use strict'

import React from 'react'
import ReactCSS from 'reactcss'
import _ from 'lodash'

import WorkbenchSidebarItem from './WorkbenchSidebarItem'

class WorkbenchSidebar extends React.Component {
  classes() {
    return {
      'default': {
        sidebar: {
          padding: '10px',
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
        title: {
          fontWeight: 'bold',
          marginTop: '10px',
        },
      },
    }
  }

  handleClick = (data) => {
    this.props.onSelect(data)
  }

  render() {
    return (
      <div is="sidebar">
        <div is="header">Workbench</div>

        { _.map(this.props.contexts, (context, contextName) => {
          return (
            <WorkbenchSidebarItem
              key={ contextName }
              label={ contextName }
              data={ context }
              onClick={ this.handleClick }
              active={ _.isEqual(this.props.active, context) }
            />
          )
        }) }

        <hr />

        { _.map(this.props.props, (props, propName) => {
          return (
            <div key={ propName }>
              <div is="title">{ propName }</div>
              { _.map(props, (propValue) => {
                return (
                  <WorkbenchSidebarItem
                    key={ propValue }
                    label={ propValue }
                    data={{ [propName]: propValue }}
                    onClick={ this.handleClick }
                    active={ _.isEqual(this.props.active[propName], propValue) }
                  />
                )
              }) }
            </div>
          )
        }) }
      </div>
    )
  }
}

export default ReactCSS(WorkbenchSidebar)
