import { styled } from 'styled-components'

export const TitleCart = styled.span`
  font-size: 1.125rem;
  font-weight: 900;
  font-family: 'Baloo 2', sans-serif;
  color: ${(props) => props.theme['base-title']};
  line-height: 130%;
`

export const ContainerSide = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;
`

export const DevilveryContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  gap: 1rem;
`

export const CartCointainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  gap: 1rem;
`

export const DeliveryFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
`

export const SubTitle = styled.span`
  font-size: 0.875rem;
  font-weight: normal;
  color: ${(props) => props.theme['base-text']};
  margin-right: 3rem;
`
export const SubTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const IconText = styled.div`
  display: flex;
  gap: 0.5rem;
  color: ${(props) => props.theme['base-subtitle']};
`

export const IconSubText = styled.span`
  font-weight: normal;
  color: ${(props) => props.theme['base-label']};
  padding-left: 1.875rem;
`

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  &::after {
    content: 'Opcional';
    position: absolute;
    right: 8px;
    top: 50%;
    font-size: 15px;
    transform: translateY(-50%);
    font-style: italic;
    margin-right: 1rem;
  }
`

export const InputGeneric = styled.input<{ $width?: string }>`
  background-color: ${(props) => props.theme['base-hover']};
  border: none;
  border-radius: 8px;
  width: ${(props) => props.$width || '100%'};
  height: 2.625rem;
  font-size: 1rem;
  padding-left: 1rem;
`

export const InputContainer = styled.div`
  display: flex;
  gap: 12px;
  justify-content: space-between;
`

export const ButtonPayment = styled.button`
  background-color: ${(props) => props.theme['base-button']};
  display: flex;
  gap: 0.5rem;
  border: none;
  padding: 1rem;
  width: 11.175rem;
  justify-content: center;
  border-radius: 8px;
`

export const ButtonText = styled.span`
  color: ${(props) => props.theme['base-label']};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.75rem;
  text-transform: uppercase;
  font-weight: 900;
`

export const ContainerHistoric = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  gap: 1rem;
`

export const CoffeeHistoric = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  gap: 0.5rem;
  padding: 2rem 0;
  justify-content: space-between;
`

export const CoffeContainer = styled.div`
  display: flex;
`

export const ContainerTotal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 2rem;
`

export const ValueContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ValueText = styled.span<{ $Total?: boolean }>`
  font-size: ${(props) => (props.$Total ? '1.3rem' : '1rem')};
  font-weight: ${(props) => (props.$Total ? '900' : 'normal')};
`
export const ButtonSend = styled.button`
  background-color: ${(props) => props.theme['yellow-main']};
  color: white;
  display: flex;
  gap: 0.5rem;
  border: none;
  padding: 0.5rem 2rem;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`
