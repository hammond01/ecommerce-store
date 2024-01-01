import React, { useContext } from 'react'
import { HomeContext } from '../../Context/HomeContext'
import remove_icon from "../Data/cart_cross_icon.png";
import "./CartItems.css"
const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeToCart } = useContext(HomeContext);
    return (
        <div className='cart-item'>
            <div className="cart-item-format-main">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {
                all_product.map((e) => {
                    if (cartItems[e.id] > 0) {
                        return <div key={e.id}>
                            <div className="cart-item-format cart-item-format-main">
                                <img src={e.image} alt="" className='cart-icon-product-icon' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cart-item-quantity'>{cartItems[e.id]}</button>
                                <p>${e.new_price * cartItems[e.id]}</p>
                                <img src={remove_icon} onClick={() => {
                                    removeToCart(e.id)
                                }} alt="" className='cart-remove-icon' />
                            </div>
                        </div>
                    }
                    else
                        return null;
                })
            }
            <div className="cart-item-down">
                <div className="cart-item-total">
                    <h1>Cart total</h1>
                    <div>
                        <div className="cart-item-total-item">
                            <p>Subtitle</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-item-total-item">
                            <p>Shipping</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cart-item-total-item">
                            <p>Total</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                    </div>
                    <button>
                        PROCESS TO CHECKOUT
                    </button>
                </div>
                <div className="cart-item-promo-code">
                    <p>It you have promo code, enter it here</p>
                    <div className="cart-item-promo-box">
                        <input type="text" placeholder='Promo code ...' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems
