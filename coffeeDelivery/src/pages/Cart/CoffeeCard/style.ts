import { styled } from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  padding: 0 2rem;
  gap: 1rem;
  justify-content: space-between;
`
export const CoffeeAmountContainerWithText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
export const CoffeeName = styled.span`
  font-size: 1rem;
  font-weight: 900;
  text-align: baseline;
`

export const CoffeActions = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const ButtonWithIcon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: ${(props) => props.theme['base-button']};
  gap: 0.5rem;
  border-radius: 8px;
  padding: 0 0.5rem;
`
export const CurrencyValue = styled.span`
  font-family: 'Baloo 2', sans-serif;
  font-weight: 900;
  color: ${(props) => props.theme['base-title']};
  font-size: 1rem;
  text-align: center;
`
export const Spacer = styled.div`
  width: 90%;
  border-bottom: 2px solid ${(props) => props.theme['base-button']};
  align-self: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  border-radius: 8px;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`
