import React, {useEffect, useState} from 'react'
import {useParams} from  "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Currency from 'react-currency-formatter';

import "./Details.css"
const Details = () => {

    const [count , setCount] = useState(1);

    const {id} = useParams();
    const dispatch = useDispatch();
    const {product} = useSelector(state => state.ProductsReducer)
   
    useEffect(()=>{
        dispatch({
            type : "PRODUCT",
            id : id
        })
    }, {id})
 
    const decrement = () =>{
        if(count > 1){
            setCount(count-1);
        }
    }

    return (
        <div className="product__details">
            <div className="product__details__image">
                <img src={`/Images/${product.image}`} alt="" />
            </div>
            <div className="product__details__info">
                <div className="details__name">
                    {product.name}
                </div>
                <div className="details__price">
                    <div className="details__price__actual">
                        <Currency
                                quantity={product.price}
                                currency="EUR"
                        />
                           
                    </div>
                    <div className="details__price__discount">
                        <Currency
                            quantity={product.discountPrice}
                            currency="EUR"
                        />
                    </div>
                </div>
                <div className="deatils__basket">
                    <div className="range__items">
                        <span className="decrement" onClick={decrement}>
                               -
                        </span>
                        <span className="quantity">{count}</span>
                        <span className="increment" onClick={()=>setCount(count+1)}>
                           +
                        </span>
                       <button className="add__to__cart" onClick={()=>dispatch({type : "ADD_TO_CART", payload : {product, count}})}>Add to cart</button>
                    </div>
                </div>
                <div className="product__description">
                    <h4 className="head__name">Details</h4>
                   <p className="description">{product.desc}</p>
                </div>
            </div>
        </div>
    )
}

export default Details
