import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);
    const cartItems = useSelector((store) => store.cart.items);
    // console.log(cartItems);

    return (
        <div className="flex justify-between m-2 bg-green-100 shadow">
            <div className="">
                <img className="w-25" src={LOGO_URL} />
            </div>
            <div className="flex">
                <ul className="flex">
                    <li className="py-8 mx-4 font-bold">Online Status: {onlineStatus ? "Online" : "Offline"}</li>
                    <li className="py-8 mx-4 font-bold"><Link to="/">Home</Link></li>
                    <li className="py-8 mx-4 font-bold"><Link to="/about-us">About Us</Link></li>
                    <li className="py-8 mx-4 font-bold"><Link to="/contact-us">Contact Us</Link></li>
                    <li className="py-8 mx-4 font-bold"><Link to="/grocery">Grocery</Link></li>
                    <li className="py-8 mx-4 font-bold"><Link to="/cart">Cart ({cartItems.length} items)</Link></li>
                    <div className="py-6 mx-4">
                        <button className="p-2 bg-gray-400 rounded-lg font-bold" onClick={() => {
                            btnName==="Login" ? setBtnName("Logout") : setBtnName("Login");
                        }}>{btnName}</button>
                    </div>
                    <li className="py-8 mx-4">User: <span className="font-bold">{loggedInUser}</span></li>
                </ul>
            </div>
        </div>
    )
};

export default Header;