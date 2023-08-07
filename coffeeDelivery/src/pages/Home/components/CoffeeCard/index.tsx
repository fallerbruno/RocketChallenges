import { useContext, useState } from 'react'
import { CoffeeType } from '../..'
import {
  ActionsContainer,
  Amount,
  ButtonAmount,
  ButtonIconOnly,
  CardContainer,
  CardImgContainer,
  CoffeAmountContainer,
  CoffeDescription,
  CoffeName,
  CurrencyValue,
  TagContainer,
  TagText,
  ValueContainer,
} from './styles'
import { ShoppingCart } from 'phosphor-react'
import { CartContext } from '../../../../contexts/CartContext'
export function CoffeeCard({ name, img, tag, description, value }: CoffeeType) {
  const [amount, setAmount] = useState(1)
  const [valueTotal, setValueTotal] = useState(value)
  const { addCoffee } = useContext(CartContext)

  function handleChangeAmount(plus: boolean) {
    if (plus) {
      setAmount((state) => state + 1)
      setValueTotal((state) => state + value)
    } else {
      if (amount === 1) {
        return
      }
      setAmount((state) => state - 1)
      setValueTotal((state) => state - value)
    }
  }

  function handleAddtoCart() {
    addCoffee({
      name,
      valueTotal,
      amount,
      value,
      image: img,
    })
  }

  return (
    <CardContainer>
      <CardImgContainer>
        <img src={img} alt="Café" width="120px" />
      </CardImgContainer>
      <TagContainer>
        {tag.map((tag) => (
          <TagText key={tag.id}>{tag.name}</TagText>
        ))}
      </TagContainer>
      <CoffeName>{name}</CoffeName>
      <CoffeDescription>{description}</CoffeDescription>
      <ActionsContainer>
        <ValueContainer>
          <CurrencyValue>
            {Number(valueTotal?.toFixed(2))?.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 2,
            })}
          </CurrencyValue>
        </ValueContainer>
        <CoffeAmountContainer>
          <ButtonAmount onClick={() => handleChangeAmount(false)}>
            -
          </ButtonAmount>
          <Amount>{amount}</Amount>
          <ButtonAmount onClick={() => handleChangeAmount(true)}>
            +
          </ButtonAmount>
        </CoffeAmountContainer>
        <ButtonIconOnly>
          <ShoppingCart
            size={22}
            color="white"
            weight="fill"
            onClick={handleAddtoCart}
          />
        </ButtonIconOnly>
      </ActionsContainer>
    </CardContainer>
  )
}
