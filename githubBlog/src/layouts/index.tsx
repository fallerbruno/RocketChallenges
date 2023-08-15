import { Outlet } from 'react-router-dom'
import { Banner, BannerContainer, LayoutContainer } from './styles'
import banner from '../assets/Cover.png'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <BannerContainer>
        <Banner src={banner} alt="" />
      </BannerContainer>
      <Outlet />
    </LayoutContainer>
  )
}
