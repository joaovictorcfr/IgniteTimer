import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import History from './Pages/History/History'
import DefaultLayout from './Layout/DefaultLayout/DefaultLayout'
import { GlobalStyle } from './Components/Styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './Components/Styles/Themes/Default'
import { CyclesContextProvider } from './Contexts/CyclesContexts'

export function RoutesApp() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <CyclesContextProvider>
          <Routes>
            <Route path="/" element={<DefaultLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/history" element={<History />} />
            </Route>
          </Routes>
          <GlobalStyle />
        </CyclesContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}
