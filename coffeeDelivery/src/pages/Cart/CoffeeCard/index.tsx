import { useContext, useState } from 'react'
import {
  Amount,
  ButtonAmount,
  CoffeAmountContainer,
} from '../../Home/components/CoffeeCard/styles'
import { coffeeCartType } from '../../../reduces/cart/reducer'
import {
  ButtonWithIcon,
  CoffeActions,
  CoffeeAmountContainerWithText,
  CoffeeCardContainer,
  CoffeeName,
  Container,
  CurrencyValue,
  Spacer,
} from './style'
import { Trash } from 'phosphor-react'
import { CartContext } from '../../../contexts/CartContext'

export function CoffeeCard({
  image,
  name,
  valueTotal,
  value,
  amount,
}: coffeeCartType) {
  const [coffeAmount, setAmount] = useState(amount)
  const [totalValue, setValueTotal] = useState(valueTotal)
  const { updateList, removeList } = useContext(CartContext)

  function handleChangeAmount(plus: boolean) {
    if (plus) {
      setAmount((state) => state + 1)
      setValueTotal((state) => state + value)
      updateList({ image, name, valueTotal, value, amount: coffeAmount + 1 })
    } else {
      setAmount((state) => state - 1)
      setValueTotal((state) => state - value)
      updateList({ image, name, valueTotal, value, amount: coffeAmount - 1 })
    }
  }

  function handleRemoveCoffee() {
    removeList({ image, name, valueTotal, value, amount: coffeAmount })
  }

  return (
    <Container>
      <CoffeeCardContainer>
        <img src={image} alt="" width={80} />
        <CoffeeAmountContainerWithText>
          <CoffeeName>{name}</CoffeeName>
          <CoffeActions>
            <CoffeAmountContainer>
              <ButtonAmount onClick={() => handleChangeAmount(false)}>
                -
              </ButtonAmount>
              <Amount>{coffeAmount}</Amount>
              <ButtonAmount onClick={() => handleChangeAmount(true)}>
                +
              </ButtonAmount>
            </CoffeAmountContainer>
            <ButtonWithIcon onClick={() => handleRemoveCoffee()}>
              <Trash size={20} color="#8047f8" />
              <span>Remover</span>
            </ButtonWithIcon>
          </CoffeActions>
        </CoffeeAmountContainerWithText>
        <CurrencyValue>
          {Number(totalValue?.toFixed(2))?.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
          })}
        </CurrencyValue>
      </CoffeeCardContainer>
      <Spacer />
    </Container>
  )
}
