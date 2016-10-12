'use strict'

import React from 'react'
import ReactCSS from 'reactcss'
import _ from 'lodash'

import buttonSpec from '../../examples/ButtonSpec'

class Workbench extends React.Component {
  constructor() {
    super()

    const composeSidebar = (example) => {
      const component = example.props.component
      const bench = { width: example.props.width, height: example.props.height }
      const props = example.props.props
      const examples = example.props.children.map((example) => {
        return {
          name: example.props.name,
          props: example.props.children.props
        }
      })

      return {
        component,
        props,
        examples,
        bench
      }
    }

    this.spec = composeSidebar(buttonSpec);
    // console.log(this.spec)

    this.state = {
      props: this.spec.examples[0].props,
      bench: this.spec.bench || {
        width: 400,
        height: 200
      }
    }
  }

  renderEditItem = (propName, props) => {
    const isPropCategory = (props) => {

    }
    return <div />
    return (
      <input
        placeholder={ this.state[propName] }
        onChange={ (e) => { this.setState({ [propName]: e.target.value }) } }
      />
    )
  }

  render() {
    const handleBenchChange = (param, e) => {
      this.setState({
        bench: { ...this.state.bench, [param]: e.target.value }
      })
    }

    return (
      <div style={{ display: 'flex', alignItems: 'stretch', position: 'absolute', top: '20px', right: '0', bottom: '0', left: '0', background: '#fafafa' }}>
        <div style={{ width: '100px' }}>
          { this.spec.examples.map(({ name, props }, i) => {
            const handleClick = () => {
              this.setState({ props })
            }
            return <div key={ i } style={ _.isEqual(this.state.props, props) ? { color: 'blue' } : {} } onClick={ handleClick }>{ name }</div>
          }) }
          -----
          { _.map(this.spec.props, (props, propName) => {
            return (
              <div key={ propName } style={{ padding: '10px 0 5px' }}>
                { propName }
                { _.map(props, (value, i) => {
                  const handleClick = () => {
                    this.setState({ props: { ...this.state.props, [propName]: value } })
                  }
                  return (
                    <pre key={ i } onClick={ handleClick } style={{ margin: 0 }}>
                      { this.state.props[propName] === value ? '* ' + value : '  ' + value }
                    </pre>
                  )
                }) }
                { this.renderEditItem(propName, props) }
              </div>
            )
          }) }
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', flex: '1' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '1' }}>
            <div style={{ width: this.state.bench.width, height: this.state.bench.height, background: '#fff' }}>
              { React.createElement(this.spec.component, this.state.props) }
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <input
              type="number"
              style={{ width: '60px' }}
              value={ this.state.bench.width }
              onChange={ handleBenchChange.bind(null, 'width') }
            />
            <input
              type="number"
              style={{ width: '60px' }}
              value={ this.state.bench.height }
              onChange={ handleBenchChange.bind(null, 'height') }
            />
          </div>
        </div>
      </div>
    )
  }
}

export default ReactCSS(Workbench)
