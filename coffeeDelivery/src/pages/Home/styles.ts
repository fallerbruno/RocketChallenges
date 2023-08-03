import { styled } from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  padding: 2rem 0;
`

export const BannerContainer = styled.main`
  height: 34rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  font-family: 'Baloo 2', sans-serif;
  color: ${(props) => props.theme['base-title']};
  line-height: 130%;
`
export const SubTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: normal;
  color: ${(props) => props.theme['base-subtitle']};
  margin-right: 3rem;
`

export const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  width: 100%;
  gap: 1rem;
  padding: 4.125rem 0;
`

export const InfoCard = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const IconContainer = styled.div<{ $color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  background-color: ${(props) => props.theme[props.$color]};
  border-radius: 50%;
`
export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.375rem;
`

export const MenuTitle = styled.span`
  font-size: 2rem;
  font-weight: 900;
  font-family: 'Baloo 2', sans-serif;
  color: ${(props) => props.theme['base-subtitle']};
`

export const Menu = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`
