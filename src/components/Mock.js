import React from 'react'

import WorkbenchSidebar from './WorkbenchSidebar'

export default class Mock extends React.Component {
  render() {
    return (
      <div style={{ position: 'absolute', top: '0', right: '0', bottom: '0', left: '0', display: 'flex' }}>
        <div style={{ width: '220px', borderRight: '1px solid #aaa' }}>
          { <WorkbenchSidebar props={ this.props } examples={ this.props.children } active={ this.state } onSelect={ this.handleSelect } /> }
        </div>
        <div is="content" style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div is="render">

            { this.props.children }

          </div>
        </div>

      </div>
    )
  }
}
