import { Example } from '../src/components/index'
import React from 'react'
import Button from './Button'

const props = {
  label: ['Click Me', 'Foo Bar', 'YO'],
  background: ['#333', '#ddd', '#59ABFC'],
  color: ['#aeee00', '#fff', '#333'],
}

export default (
  <Example component={ Button } props={ props } width={ 200 } height={ 50 }>
    <Example name="Simple">
      <Button label="Click Me" background="#ddd" color="#333" />
    </Example>
    <Example name="CTA">
      <Button label="DOWNLOAD" background="#59ABFC" color="#fff" />
    </Example>
  </Example>
)
