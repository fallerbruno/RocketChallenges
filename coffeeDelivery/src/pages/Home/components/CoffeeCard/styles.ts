import { styled } from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  gap: 0.5rem;
  padding: 1rem 0;
  height: 19.375rem;
  justify-content: space-between;
`
export const CardImgContainer = styled.div`
  display: flex;
  margin-top: -2.8rem;
  justify-content: center;
`
export const TagText = styled.span`
  background-color: ${(props) => props.theme['yellow-light']};
  font-size: 0.625rem;
  color: ${(props) => props.theme['yellow-dark']};
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.25rem;
  width: auto;
  align-self: center;
  font-weight: bold;
`
export const TagContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`

export const CoffeName = styled.span`
  font-family: 'Baloo 2', sans-serif;
  font-weight: 900;
  color: ${(props) => props.theme['base-title']};
  line-height: 130%;
  font-size: 1.25rem;
  text-align: center;
`

export const CoffeDescription = styled.span`
  color: ${(props) => props.theme['base-label']};
  line-height: 130%;
  font-size: 0.875rem;
  text-align: center;
  padding: 0 1.5rem;
`

export const ActionsContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0.5rem 0;
  justify-content: center;
`

export const ValueContainer = styled.div`
  display: flex;
  gap: 0.2rem;
  align-items: center;
  justify-content: flex-start;
`

export const CurrencyValue = styled.span`
  font-family: 'Baloo 2', sans-serif;
  font-weight: 900;
  color: ${(props) => props.theme['base-title']};
  font-size: 1.5rem;
  text-align: center;
`
export const CurrencyCoin = styled.span`
  font-size: 0.8rem;
  text-align: baseline;
  font-weight: normal;
`

export const CoffeAmountContainer = styled.div`
  display: flex;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 8px;
  padding: 0.5rem;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`

export const ButtonAmount = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme['purple-dark']};
  border-radius: 8px;
  border: 0;
  font-size: 1rem;
`

export const Amount = styled.span`
  font-size: 1rem;
  font-weight: normal;
  text-align: center;
  justify-content: center;
`

export const ButtonIconOnly = styled.button`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme['purple-dark']};
  border: 0;
  padding: 0.5rem;
  border-radius: 8px;

  cursor: pointer;
`
