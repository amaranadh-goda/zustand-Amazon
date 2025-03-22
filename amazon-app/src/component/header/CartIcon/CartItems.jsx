
import { useEffect } from "react";
import { Link } from "react-router-dom";
import useCartStore from "../../../ZustandStore/Store";
import "./cartIconStyles/cartItems.css";
import FulFilledImg from "../../../../public/Images/fulfilled.png";

// Icons
import { AiTwotoneDelete } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";

function CartItems() {
    // Get cart data & actions from Zustand store
    const { cartItems, fetchCartItems, updateCartItem, removeFromCart,saveLater } = useCartStore();

    // Fetch cart items when component mounts or new added 
    useEffect(() => {
        fetchCartItems();
    }, [fetchCartItems]);

    return (
        <>
            <div className="CartItems-container">
                {cartItems.length === 0 ? (
                    <h4 className="text-center mt-4">Your cart is empty!</h4>
                ) : (
                    cartItems.map((item) => (
                        <div key={item.id}>
                            <div className="d-flex CartItems-card">
                                {/* Product Image */}
                                <div className="ml-5">
                                    <img src={item.itemImg} alt="Product" className="cartItems-img" />
                                </div>

                                {/* Product Details */}
                                <div className="CartItems-card-body ml-3">
                                    <p>{item.name}</p>
                                    <span className="In-stock">In stock</span>
                                    <div className="Eligible-for-FREE-Shipping">Eligible for FREE Shipping</div>
                                    <img src={FulFilledImg} alt="Fulfilled" />
                                    
                                    {/* Gift Option */}
                                    <div>
                                        <input className="form-check-input position-relative ml-1 mr-2" type="checkbox" />
                                        <span className="gift">
                                            This will be a gift <Link to="" className="Learn-more">Learn more</Link>
                                        </span>
                                    </div>

                                    {/* Quantity Controls */}
                                    <div className="d-flex">
                                        <div className="quantity-button">
                                            {/* Delete Item */}
                                            <AiTwotoneDelete
                                                className="mr-3 AiTwotoneDelete"
                                                onClick={() => removeFromCart(item.id)} // Calling the remove function here
                                                style={{ cursor: "pointer", color: "red" }}
                                            />
                                            
                                            {/* Current Quantity */}
                                            <span>{item.quantity}</span>

                                            {/* Increase Quantity */}
                                            <IoMdAdd
                                                onClick={() => updateCartItem(item.id, item.quantity + 1)}
                                                className="ml-3"
                                                style={{ cursor: "pointer" }}
                                            />
                                        </div>

                                        {/* Extra Options */}
                                        <div className="quantity-button-items">
                                            <span className="ml-2">
                                                <span className="mr-2">|</span>
                                                <span className="items" onClick={() => removeFromCart(item.id)} style={{ cursor: "pointer" }}>
                                                    Delete
                                                </span>
                                                <span className="ml-2">|</span>
                                            </span>
                                            <span className="ml-2">
                                                <span className="items" onClick={()=>saveLater(item.id)}  style={{ cursor: "pointer" }}>Save for later</span>
                                                <span className="ml-2">|</span>
                                            </span>
                                            <span className="ml-2">
                                                <span className="items">See more like this</span>
                                                <span className="ml-2">|</span>
                                            </span>
                                            <span className="ml-2">
                                                <span className="items">Share</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Price & Payment Options */}
                                <div className="d-flex align-items-end flex-column w-25 mr-4 cartItems-right-content">
                                    <div className="mb-2 price">&#8377;{item.tempPrice}</div>
                                    <div className="mb-1 save">Save 5% more with</div>
                                    <div className="mb-1 subscribe">Subscribe & Save</div>
                                    <div className="mb-1 amazonPay">Up to 5% back with Amazon Pay</div>
                                    <div className="mb-1 icici">
                                        ICICI card <Link className="text-decoration-none">Terms</Link>
                                    </div>
                                </div>
                            </div>

                            <hr className="ml-3 mr-3 position-relative" />
                        </div>
                    ))
                )}
            </div>
        </>
    );
}

export default CartItems;
