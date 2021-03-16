import { forEach } from '@contentpi/lib'
import { palette } from './palette'

const variables: any = {}
const newPalette: any = palette

forEach(newPalette, (color: string) => {
  variables[color] = {}

  forEach(newPalette[color], (type: string) => {
    variables[color][type] = `var(--${color}-${type});`
  })
})

export default variables
