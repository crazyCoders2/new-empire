import { Routes, Route } from 'react-router-dom'

/* == Pages == */
import HomePage from './pages/Home'

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
    </Routes>
  )
}

export default function Router() {
  const userRole = ''
  let RoutesToHandle
  if (userRole === 'admin') RoutesToHandle = AdminRoutes
  else if (userRole === 'customer') RoutesToHandle = CustomerRoutes
  else RoutesToHandle = DefaultRoutes

  return <RoutesToHandle />
}
