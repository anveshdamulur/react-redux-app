import React from 'react'
import Header from './Header'
import "./Home.css"
import { useSelector} from "react-redux";
import Product from './Product';
const Home = () => {

  const {products} = useSelector(state => state.ProductsReducer);
    return (
        <div className="home">
            <Header />
            <div className="products">
               {    
                    products.map(product =>(
                    <Product 
                        id = {product.id}
                        name ={product.name}
                        image ={product.image}
                        price = {product.price}
                        discount ={product.discount}
                        discountPrice = {product.discountPrice}
                    />
                    ))                 
               }
            </div>
        </div>
    )
}

export default Home
