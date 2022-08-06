import { Routes, Route } from 'react-router-dom'

/* == Pages == */
import Layout from './components/Layout'
import HomePage from './pages/Home'
import BarPage from './pages/Bar'

/* == All the routes associated with admin == */
const AdminRoutes = () => {
  return <Routes></Routes>
}

/* == All the routes associated with customers == */
const CustomerRoutes = () => {
  return <Routes></Routes>
}

/* == All the defaults routes == */
const DefaultRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/bar' element={<BarPage />}></Route>
    </Routes>
  )
}

export default function Router() {
  const userRole = ''
  let RoutesToHandle
  if (userRole === 'admin') RoutesToHandle = AdminRoutes
  else if (userRole === 'customer') RoutesToHandle = CustomerRoutes
  else RoutesToHandle = DefaultRoutes

  return (
    <Layout>
      <RoutesToHandle />
    </Layout>
  )
}
