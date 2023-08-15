import { styled } from 'styled-components'

export const Main = styled.div`
  padding: 0 0 5rem 0;
`

export const Container = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  align-content: center;
  display: flex;
  flex-direction: column;
`

export const ContainerSearch = styled.div`
  display: flex;
  width: 54rem;
  justify-content: space-between;
  margin-top: 4.5rem;

  h3 {
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-title']}
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']}
  }
`

export const Input = styled.input`
    width: 54rem;
    height: 3rem;
    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 0.5rem;
    margin-top: 0.75rem;
    margin-bottom: 3rem;
    color: ${(props) => props.theme['base-text']};
    padding-left: 1rem;

    &::placeholder {
        font-size: 0.875rem;
        color: ${(props) => props.theme['base-label']};
    }
`

export const GridContainer = styled.div`
    width: 54rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
`
