import 'styled-components'
import { defaultTheme } from '../Components/Styles/Themes/Default'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
