import { NavLink } from 'react-router-dom'
import LogoRocket from '../../assets/Logo.svg'
import { HeaderContainer } from './Styles'
import { Timer, Scroll } from 'phosphor-react'

function Header() {
  return (
    <HeaderContainer>
      <img src={LogoRocket} alt="" />
      <nav>
        <NavLink to={'/'} title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to={'/history'} title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}

export default Header
