import styled from 'styled-components'

export const LayoutContainer = styled.div`
  background-color: ${(props) => props.theme['gray-800']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`

export const BannerContainer = styled.div`
  width: 100%;
`

export const Banner = styled.img`
  width: 100%;
  object-fit: cover;
`
