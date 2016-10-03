/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// Idea 1:

export { default as Component } from './Button'
export default {
  instances: {
    'Simple': {
      label: 'Click Me',
      background: '#ddd',
      color: '#333',
    },
    'CTA': {
      label: 'DOWNLOAD',
      background: '#59ABFC',
      color: '#fff',
    },
  },
  props: {
    label: ['Click Me', 'Foo Bar', 'YO'],
    background: ['#333', '#ddd', '#59ABFC'],
    color: ['#aeee00', '#fff', '#333'],
  },
}

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// Idea 2:

const instances = {
  'Simple': {
    label: 'Click Me',
    background: '#ddd',
    color: '#333',
  },
  'CTA': {
    label: 'DOWNLOAD',
    background: '#59ABFC',
    color: '#fff',
  },
}

const props = {
  label: ['Click Me', 'Foo Bar', 'YO'],
  background: ['#333', '#ddd', '#59ABFC'],
  color: ['#aeee00', '#fff', '#333'],
}

export (
  <Bench
    component={ Button }
    instances={ instances }
    props={ props }
  />
)

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// Idea 3:

const props = {
  label: ['Click Me', 'Foo Bar', 'YO'],
  background: ['#333', '#ddd', '#59ABFC'],
  color: ['#aeee00', '#fff', '#333'],
}

export (
  <Example component={ Button } props={ props }>
    <Example name="Simple">
      <Button label="Click Me" background="#ddd" color="#333" />
    </Example>
    <Example name="CTA">
      <Button label="DOWNLOAD" background="#59ABFC" color="#fff" />
    </Example>
  </Example>
)

UI / Example
Mock / Example
Describe / It

Example / Example
