import { createGlobalStyle } from 'styled-components'

// Theme
import { themeRootVars, themeVariants } from '@theme'

const GlobalStyles = createGlobalStyle`
    ${themeRootVars}
    ${themeVariants}
`

export default GlobalStyles
