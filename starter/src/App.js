import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import { calculateTotal } from './features/cart/cartSlice';
function App() {
  const {cartItems}=useSelector((store)=>store.cart)
  const {isOpen}=useSelector((store)=>store.modal)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(calculateTotal())
  },[cartItems,dispatch]);
  return <main>
  {isOpen && <Modal></Modal>}
    <Navbar></Navbar>
    <CartContainer></CartContainer>
  </main>
}
export default App;
