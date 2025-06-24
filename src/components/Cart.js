import { useDispatch, useSelector } from "react-redux";
import ResMenuCategoryItems from "./ResMenuCategoryItems";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="text-center">
            <h1 className="font-bold text-2xl mt-5">Cart</h1>
            <button className="font-bold text-md bg-black text-white p-2 rounded-lg mb-5 cursor-pointer" onClick={handleClearCart}>Clear Cart</button>
            <div className="text-left w-6/12 m-auto bg-gray-100 p-3">
                {cartItems.length === 0 && <h1 className="text-gray-700 text-lg font-bold text-center">Your cart is empty. Add items to the cart!</h1>}
                {
                    cartItems?.map((item,index) => <ResMenuCategoryItems key={index} item={item} />)
                }
            </div>
        </div>
    )
}

export default Cart;