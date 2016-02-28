'use default'

export { default as Component } from './Button'

export default {
  name: 'Button',
  contexts: {
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
