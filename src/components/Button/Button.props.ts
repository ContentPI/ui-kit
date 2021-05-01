export const initialProps = {
  children: 'Button',
  color: 'danger',
  href: '#'
}

export default {
  children: {
    type: 'text',
    value: ''
  },
  color: {
    type: 'dropdown',
    value: ['primary', 'info', 'success', 'warning', 'danger', 'text']
  },
  href: {
    type: 'text',
    value: ''
  },
  disabled: {
    type: 'boolean',
    value: false
  },
  variant: {
    type: 'dropdown',
    value: ['contained', 'outlined', 'text']
  },
  size: {
    type: 'dropdown',
    value: ['small', 'medium', 'large', 'xLarge']
  },
  loadingText: {
    type: 'text',
    value: 'Creating'
  },
  isLoading: {
    type: 'boolean',
    value: false
  },
  fullWidth: {
    type: 'boolean',
    value: false
  },
  shape: {
    type: 'dropdown',
    value: ['regular', 'round', 'square']
  }
}
