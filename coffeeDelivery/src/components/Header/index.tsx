import {
  ButtonIconOnly,
  ButtonTextIcon,
  CartAmount,
  HeaderContainer,
} from './styles'
import Logo from '../../assets/Logo.png'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { coffee } = useContext(CartContext)
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
        {coffee.length > 0 ? <CartAmount>{coffee.length}</CartAmount> : null}
      </nav>
    </HeaderContainer>
  )
}
