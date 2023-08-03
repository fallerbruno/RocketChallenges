import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh);
  margin: 0 auto;
  padding: 2.5rem;

  background-color: ${(props) => props.theme['background-color']};

  display: flex;
  flex-direction: column;
`
