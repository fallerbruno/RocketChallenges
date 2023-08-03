import { ButtonIconOnly, ButtonTextIcon, HeaderContainer } from './styles'
import Logo from '../../assets/Logo.png'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />
      <nav>
        <ButtonTextIcon>
          <MapPin size={22} color="#8047f8" weight="fill" />
          <span>Porto Alegre, RS</span>
        </ButtonTextIcon>
        <NavLink to="cart" title="Menu">
          <ButtonIconOnly>
            <ShoppingCart size={22} color="#c47f17" weight="fill" />
          </ButtonIconOnly>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
