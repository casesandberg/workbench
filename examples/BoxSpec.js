import { Example } from '../src/components/index'
import React from 'react'
import Box from './Box'

const props = {
  row: [true, false],
  column: [true, false],
  align: ['left', 'center', 'right', 'spread'],
  verticalAlign: ['top', 'center', 'bottom', 'spread']
}

export default (
  <Example component={ Box } props={ props } width={ 300 } height={ 300 }>
    <Example name="Simple">
      <Box row>
        <div style={{ width: '50px', height: '50px', border: '2px dashed #ddd' }} />
        <div style={{ width: '50px', height: '50px', border: '2px dashed #ddd' }} />
        <div style={{ width: '50px', height: '50px', border: '2px dashed #ddd' }} />
      </Box>
    </Example>
    <Example name="CTA">
      <Box label="DOWNLOAD" background="#59ABFC" color="#fff" />
    </Example>
  </Example>
)
