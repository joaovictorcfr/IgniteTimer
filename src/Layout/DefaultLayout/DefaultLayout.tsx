import { Outlet } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import { LayoutContainer } from './Styles'

function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      {/* Inserir conteúdo da pagina, que ficará de forma padrão */}
      <Outlet />
    </LayoutContainer>
  )
}

export default DefaultLayout
