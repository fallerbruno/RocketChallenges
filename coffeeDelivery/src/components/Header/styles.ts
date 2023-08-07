import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 6.5rem;
  top: 0;

  nav {
    display: flex;
    gap: 0.5rem;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;

    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;

    /* &:hover {
      border-bottom: 3px solid ${(props) => props.theme['yellow-dark']};
    } */
  }
`

export const ButtonIconOnly = styled.button`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme['yellow-light']};
  border: 0;
  padding: 0.5rem;
  border-radius: 8px;

  cursor: pointer;
`

export const ButtonTextIcon = styled.button`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme['purple-light']};
  border: 0;
  padding: 0.5rem;
  border-radius: 8px;
  gap: 5px;
  color: ${(props) => props.theme['purple-dark']};
  font-size: 0.875rem;
  line-height: normal;

  cursor: pointer;
`

export const CartAmount = styled.span`
  display: flex;
  align-items: center;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  text-align: center;
  justify-content: center;
  background-color: ${(props) => props.theme['yellow-dark']};
  color: white;
  font-size: 0.75rem;
  margin-top: -0.3rem;
  margin-left: -1.3rem;
`
