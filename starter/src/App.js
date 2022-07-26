import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { calculateTotal } from './features/cart/cartSlice';
function App() {
  const {cartItems}=useSelector((store)=>store.cart)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(calculateTotal())
  },[cartItems])
  return <main>
    <Navbar></Navbar>
    <CartContainer></CartContainer>
  </main>
}
export default App;
