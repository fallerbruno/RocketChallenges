import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  ButtonPayment,
  ButtonSend,
  ButtonText,
  CartCointainer,
  CoffeeHistoric,
  ContainerHistoric,
  ContainerSide,
  ContainerTotal,
  DeliveryFormContainer,
  DevilveryContainer,
  IconSubText,
  IconText,
  InputContainer,
  InputGeneric,
  InputWrapper,
  SubTitleContainer,
  TitleCart,
  ValueContainer,
  ValueText,
} from './styles'

import { CartContext } from '../../contexts/CartContext'
import { useContext, useEffect, useState } from 'react'
import { CoffeeCard } from './CoffeeCard'
import { coffeeCartType } from '../../reduces/cart/reducer'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

export function Cart() {
  const { coffee } = useContext(CartContext)
  const [total, setTotal] = useState(0)
  const [delivery, setDelivery] = useState(3.5)
  const navigate = useNavigate()
  const [adress, setAdress] = useState({
    cep: '',
    rua: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    uf: '',
  })
  const [methodPayment, setMethodPayment] = useState('')
  function getTotal() {
    const totalValue = coffee.reduce((acc, item) => {
      return acc + item.valueTotal
    }, 0)
    setTotal(totalValue)
  }

  useEffect(() => {
    getTotal()
  }, [coffee, getTotal])

  function handleConfirmDelivery() {
    if (methodPayment === '') {
      toast('Necessita de um metodo de pagamento')
      return
    }
    if (adress.cep === '') {
      toast('Necessita de um CEP')
      return
    }
    if (adress.rua === '') {
      toast('Necessita de um Rua')
      return
    }
    if (adress.numero === '') {
      toast('Necessita de um Número')
      return
    }
    if (adress.bairro === '') {
      toast('Necessita de um Bairro')
      return
    }
    if (adress.cidade === '') {
      toast('Necessita de um Bairro')
      return
    }
    if (adress.uf === '') {
      toast('Necessita de um uf')
      return
    }

    const state = {
      methodPayment,
      value: total + delivery,
      adress,
    }
    navigate('/checkout', { state })
  }

  return (
    <CartCointainer>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ContainerSide>
        <DevilveryContainer>
          <TitleCart>Complete seu pedido</TitleCart>
          <DeliveryFormContainer>
            <SubTitleContainer>
              <IconText>
                <MapPinLine size={22} color="#c47f17" />
                <span>Endereço de Entrega</span>
              </IconText>
              <IconText>
                <IconSubText>
                  Informe o endereço onde deseja receber seu pedido
                </IconSubText>
              </IconText>
            </SubTitleContainer>
            <InputGeneric
              $width="40%"
              type="text"
              placeholder="CEP"
              onChange={(event) =>
                setAdress({ ...adress, cep: event.target.value })
              }
            />
            <InputGeneric
              type="text"
              placeholder="Rua"
              onChange={(event) =>
                setAdress({ ...adress, rua: event.target.value })
              }
            />
            <InputContainer>
              <InputGeneric
                $width="40%"
                type="text"
                placeholder="Número"
                onChange={(event) =>
                  setAdress({ ...adress, numero: event.target.value })
                }
              />
              <InputWrapper>
                <InputGeneric
                  $width="100%"
                  type="text"
                  placeholder="Complemento"
                  onChange={(event) =>
                    setAdress({ ...adress, complemento: event.target.value })
                  }
                />
              </InputWrapper>
            </InputContainer>
            <InputContainer>
              <InputGeneric
                $width="40%"
                type="text"
                placeholder="Bairro"
                onChange={(event) =>
                  setAdress({ ...adress, bairro: event.target.value })
                }
              />
              <InputGeneric
                $width="40%"
                type="text"
                placeholder="Cidade"
                onChange={(event) =>
                  setAdress({ ...adress, cidade: event.target.value })
                }
              />
              <InputGeneric
                $width="20%"
                type="text"
                placeholder="UF"
                onChange={(event) =>
                  setAdress({ ...adress, uf: event.target.value })
                }
              />
            </InputContainer>
          </DeliveryFormContainer>
          <DeliveryFormContainer>
            <SubTitleContainer>
              <IconText>
                <CurrencyDollar size={22} color="#8047f8" />
                <span>Pagamento</span>
              </IconText>
              <IconText>
                <IconSubText>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </IconSubText>
              </IconText>
            </SubTitleContainer>
            <InputContainer>
              <ButtonPayment
                onClick={() => setMethodPayment('Cartão de Crédito')}
                style={{
                  backgroundColor:
                    methodPayment === 'Cartão de Crédito' ? '#ebe5f9' : '',
                }}
              >
                <CreditCard size={22} color="#8047f8" />
                <ButtonText>Cartão de Crédito</ButtonText>
              </ButtonPayment>
              <ButtonPayment
                onClick={() => setMethodPayment('Cartão de Debíto')}
                style={{
                  backgroundColor:
                    methodPayment === 'Cartão de Debíto' ? '#ebe5f9' : '',
                }}
              >
                <Bank size={22} color="#8047f8" />
                <ButtonText>Cartão de Debíto</ButtonText>
              </ButtonPayment>
              <ButtonPayment
                onClick={() => setMethodPayment('Dinheiro')}
                style={{
                  backgroundColor:
                    methodPayment === 'Dinheiro' ? '#ebe5f9' : '',
                }}
              >
                <Money size={22} color="#8047f8" />
                <ButtonText>Dinheiro</ButtonText>
              </ButtonPayment>
            </InputContainer>
          </DeliveryFormContainer>
        </DevilveryContainer>
        <ContainerHistoric>
          <TitleCart>Cafés selecionados</TitleCart>
          <CoffeeHistoric>
            {coffee.map((item: coffeeCartType) => (
              <CoffeeCard
                image={item.image}
                name={item.name}
                value={item.value}
                valueTotal={item.valueTotal}
                amount={item.amount}
                key={item.name}
              />
            ))}
            <ContainerTotal>
              <ValueContainer>
                <ValueText>Valor Total dos Items</ValueText>
                <ValueText>
                  {Number(total?.toFixed(2))
                    ?.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                      minimumFractionDigits: 2,
                    })
                    .toString()}
                </ValueText>
              </ValueContainer>
              <ValueContainer>
                <ValueText>Valor de Entrega</ValueText>
                <ValueText>
                  {Number(delivery?.toFixed(2))
                    ?.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                      minimumFractionDigits: 2,
                    })
                    .toString()}
                </ValueText>
              </ValueContainer>
              <ValueContainer>
                <ValueText $Total>Valor Total</ValueText>
                <ValueText $Total>
                  {Number((total + delivery)?.toFixed(2))
                    ?.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                      minimumFractionDigits: 2,
                    })
                    .toString()}
                </ValueText>
              </ValueContainer>
              <ButtonSend onClick={handleConfirmDelivery}>
                Confirmar Pedido
              </ButtonSend>
            </ContainerTotal>
          </CoffeeHistoric>
        </ContainerHistoric>
      </ContainerSide>
    </CartCointainer>
  )
}
