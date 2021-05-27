import React, { useState } from 'react'
import {useDispatch, useSelector} from "react-redux";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsFillXSquareFill } from "react-icons/bs";
import Currency from 'react-currency-formatter';

import "./Cart.css"
const Cart = () => {
    const {products, totalQuantities, totalPrice} = useSelector(state => state.CartReducer);
    const dispatch = useDispatch()
    console.log(products);
    return (
        <div className="cart">   
            <div className="cart_heading">
                <h3>Your items :</h3>
            </div>
            {
                products.length > 0 ? 
                <div className="row">
                    <div className="cart__col__9">
                        <div className="cart__products">
                            <div className="cart__info">
                                <div className="col__2">Picture</div>
                                <div className="col__2">Name</div>
                                <div className="col__2">Price</div>
                                <div className="col__2">Inc/Dec</div>
                                <div className="col__2">Total Price</div>
                                <div className="col__2">Remove</div>
                            </div>                 
                        </div>   
                        {
                            products.map(product =>(
                                <div className="cart__info" key={product.id}>
                                    <div className="col__2">
                                        <div className="cart__image">
                                            <img src={`/Images/${product.image}`} alt="" srcset="" />
                                        </div>
                                    </div>
                                    <div className="col__2">
                                       {product.name}
                                    </div>
                                    <div className="col__2">
                                        <div className="item__price">
                                            <Currency
                                                quantity={product.discountPrice}
                                                currency="EUR"
                                            />
                                        </div>
                                    </div>
                                    <div className="col__2">
                                        <span className="decrement" onClick={() => dispatch({type : "DEC", payload : product.id})}>
                                            <AiOutlineMinus />
                                        </span>
                                        <span className="quantity">
                                            {product.quantity}
                                        </span>
                                        <span className="increment" onClick={() =>dispatch({type : "INC", payload : product.id})}>
                                            <AiOutlinePlus/>
                                        </span>
                                    </div>
                                    <div className="col__2">
                                        <div className="item__totalPrice">
                                        <Currency
                                                quantity={ product.discountPrice * product.quantity }
                                                currency="EUR"
                                            />
                                            
                                        </div>
                                    </div>
                                    <div className="col__2">
                                        <div className="item__remove" onClick={()=>dispatch({type : "REMOVE", payload : product.id})}>
                                            <BsFillXSquareFill />
                                        </div>
                                    </div>
                                  
                                </div>
                            ))
                        }  
                    </div> 
                    <div className="cart__col__3">
                        <div className="cart__summary">
                           <div className="summary__heading">
                              Summary 
                           </div>
                           <div className="summary__total">
                               <div className="summary__quantities">
                                    Items in your cart :  {totalQuantities}
                               </div>
                              <div className="summary__subtotal">
                                    Total :  <Currency
                                                quantity={totalPrice}
                                                currency="EUR"
                                            />
                              </div>
                              <div className="proceed_payment">
                                  <button>Proceed to Pay</button>
                              </div>
                           </div>
                        </div>
                    </div>
                </div>
                :
                "Your Cart is Empty"
            }
        </div>
    )
}

export default Cart
