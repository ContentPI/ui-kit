export const initialProps = {
  children: 'Button',
  color: 'danger'
}

export default {
  children: {
    type: 'text',
    value: ''
  },
  href: {
    type: 'text',
    value: ''
  },
  loadingText: {
    type: 'text',
    value: 'Creating'
  },
  color: {
    type: 'dropdown',
    value: ['primary', 'info', 'success', 'warning', 'danger', 'text']
  },
  variant: {
    type: 'dropdown',
    value: ['contained', 'outlined', 'text']
  },
  size: {
    type: 'dropdown',
    value: ['small', 'medium', 'large', 'xLarge']
  },
  shape: {
    type: 'dropdown',
    value: ['regular', 'round', 'square']
  },
  disabled: {
    type: 'boolean',
    value: false
  },
  isLoading: {
    type: 'boolean',
    value: false
  },
  fullWidth: {
    type: 'boolean',
    value: false
  }
}
