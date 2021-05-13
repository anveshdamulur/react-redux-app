import React from 'react';
import {Link} from "react-router-dom"
import "./Product.css"
import Currency from 'react-currency-formatter';
const Product = ({id, name, price, image, discount, discountPrice}) => {
    return (
        <div className="product__container">
            <div className="product__image">
                <Link to={`/details/${id}`}>
                    <div className="image">
                        <img src={`/Images/${image}`} alt="productPic" />
                    </div>
                </Link>
            </div>
            <div className="product__name">
               <h1>{name}</h1> 
            </div>
            <div className="product__price">
                <div className="product__basePrice">
                    <Currency
                            quantity={price}
                            currency="EUR"
                    />
                <span className="product__discount">{discount}%</span>
                </div>
                <div className="product__discountPrice">
                    <Currency
                            quantity={discountPrice}
                            currency="EUR"
                    />
                </div>
            </div>
        </div>
    )
}

export default Product
