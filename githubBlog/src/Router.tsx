import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/issues" element={<Issues />} />
      </Route>
    </Routes>
  )
}