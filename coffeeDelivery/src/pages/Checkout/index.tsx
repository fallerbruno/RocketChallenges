import { useLocation } from 'react-router-dom'
import {
  CheckoutCointainer,
  ContainerSide,
  DeliveryCardContainer,
  DevilveryContainer,
  IconContainer,
  InfoCard,
  SubTitleContainer,
  TextAdress,
  TextContainer,
  TitleCart,
} from './styles'
import { Clock, CurrencyDollarSimple, MapPin } from 'phosphor-react'
import Lottie from 'lottie-react'
import Delivery from '../../assets/delivery.json'
import { useContext, useEffect } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Checkout() {
  const location = useLocation()
  const { removeAll } = useContext(CartContext)

  useEffect(() => {
    removeAll()
  }, [removeAll])

  return (
    <CheckoutCointainer>
      <ContainerSide>
        <DevilveryContainer>
          <TextContainer>
            <TitleCart>Uhu! Pedido confirmado!</TitleCart>
            <SubTitleContainer>
              Agora é só aguardar que logo o café chegará até você
            </SubTitleContainer>
          </TextContainer>
          <DeliveryCardContainer>
            <InfoCard>
              <IconContainer $color="purple-main">
                <MapPin weight="fill" color="white" />
              </IconContainer>
              <TextContainer>
                <TextAdress>
                  Entrega em:{' '}
                  <b>
                    {location.state?.adress.rua},{' '}
                    {location.state?.adress.numero}
                  </b>
                </TextAdress>
                <TextAdress>
                  {location.state?.adress.bairro} -{' '}
                  {location.state.adress.complemento
                    ? location.state.adress.complemento
                    : null}{' '}
                  - {location.state?.adress.cidade}, {location.state?.adress.uf}
                </TextAdress>
              </TextContainer>
            </InfoCard>
            <InfoCard>
              <IconContainer $color="yellow-main">
                <Clock weight="fill" color="white" />
              </IconContainer>
              <TextContainer>
                <TextAdress>Previsão de entrega:</TextAdress>
                <TextAdress>
                  <b>20 min - 30 min</b>
                </TextAdress>
              </TextContainer>
            </InfoCard>
            <InfoCard>
              <IconContainer $color="yellow-dark">
                <CurrencyDollarSimple weight="fill" color="white" />
              </IconContainer>
              <TextContainer>
                <TextAdress>Pagamento na Entrega</TextAdress>
                <TextAdress>
                  <b>{location.state.methodPayment}</b>
                </TextAdress>
              </TextContainer>
            </InfoCard>
          </DeliveryCardContainer>
        </DevilveryContainer>
        <>
          <Lottie
            animationData={Delivery}
            loop={true}
            style={{ maxHeight: '284px', marginTop: '4rem', minWidth: '492px' }}
          />
        </>
      </ContainerSide>
    </CheckoutCointainer>
  )
}
