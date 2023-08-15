import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts'
import { Home } from './pages/Home'
import { Issues } from './pages/Issues'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />} />
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Issues />} />
    </Routes>
  )
}
