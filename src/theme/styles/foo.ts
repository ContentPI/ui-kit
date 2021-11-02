import { CustomTheme } from '../../types'
import { Gray } from '../color'

const customTheme: CustomTheme = {
  palette: {
    primary: {
      alert: {
        main: Gray.V200,
        contrastText: Gray.V050,
      },
      common: {
        main: Gray.V300,
        dark: Gray.V150,
        light: Gray.V100,
        contrastText: Gray.V200,
      },
    },
  },
}

export default customTheme
