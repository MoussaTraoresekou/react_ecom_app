import CheckoutPage from './composants/checkoutPage'
import HomePage from './composants/HomePage'
import {Routes,Route } from 'react-router-dom'
import OrderPage from './composants/OrderPage'
import TrackingPage from './composants/TrackingPage'

function App() {

  return (
    <>
              <Routes>
                      <Route index element={<HomePage/>}/>
                      <Route path='checkout' element={<CheckoutPage/>}/>
                      <Route path='order' element={<OrderPage/>}/>
                      <Route path='tracking' element={<TrackingPage/>}/>


              </Routes>
    </>
  )
}

export default App
