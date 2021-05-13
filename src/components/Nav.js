import React from 'react'
import "./Nav.css"
import {Link} from "react-router-dom"
import { BiBasket } from "react-icons/bi";
import { useSelector } from "react-redux";

const Nav = () => {
 const {totalQuantities} = useSelector(state => state.CartReducer)
 console.log(totalQuantities)
    return (
        <div className="navbar">
            <div className="navbar__container">
                <div className="navbar__left">
                 <Link to="/">
                    <img src="/images/logo.jpg" alt="logo" srcset="" />
                 </Link>  
                </div>
                <div className="navbar__right">
                   <Link to="/cart">
                       <div className="basket">
                            <BiBasket className="cart__basket__icon"/>
                            <span>{totalQuantities}</span>
                       </div>
                   </Link>
                </div>
            </div>
        </div>
    )
}

export default Nav
