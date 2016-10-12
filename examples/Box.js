import React from 'react'
import _ from 'lodash'
import ReactCSS from 'reactcss'

const build = (element, property, obj, toApply) => {
  return toApply ? _.mapValues(obj, (value) => {
    return { [element]: { [property]: value } }
  }) : {}
}

const justifyContent = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
  spread: 'space-between',
}

const alignItems = {
  top: 'flex-start',
  center: 'center',
  bottom: 'flex-end',
}

const flexbox = {
  // direction
  row: {
    // alignment: flexbox
    align: 'justifyContent',
    verticalAlign: 'alignItems'
  },
  column: {
    align: 'alignItems',
    verticalAlign: 'justifyContent'
  }
}

export class Box extends React.Component {
  classes = () => ({
    'default': {
      box: {

      }
    },
    'row': {
      box: {
        display: 'flex',
        width: '100%',
        height: '100%',
      }
    },
    'column': {
      box: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
      }
    },
    // ...build('box', 'justifyContent', _.mapKeys(align, (v, k) => (`align-${ k }`)), this.props.row),
    // ...build('box', 'alignItems', _.mapKeys(verticalAlign, (v, k) => (`align-${ k }`)), this.props.column),
    // ...build('box', 'alignItems', _.mapKeys(align, (v, k) => (`verticalAlign-${ k }`)), this.props.row),
    // ...build('box', 'justifyContent', _.mapKeys(verticalAlign, (v, k) => (`verticalAlign-${ k }`)), this.props.column)
  })

  render() {
    console.log(this.styles().box)
    return (
      <div style={ this.styles().box }>{ this.props.children }</div>
    )
  }
}

export default ReactCSS(Box)
