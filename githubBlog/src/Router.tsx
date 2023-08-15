import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Issues } from './pages/Issues'
import { DefaultLayout } from './layouts'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path={`/issues/:id`} element={<Issues />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Route>
    </Routes>
  )
}
