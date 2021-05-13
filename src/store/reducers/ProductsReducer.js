
const initialState = {
    products : [
        {
            id: 1, name: "man t-shirt summer season", image :"one.jpg", price: 20, discount:2, discountPrice : 20-2/100*20, quantity : 1, desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vel cumque sunt reiciendis laboriosam nisi! Facere sit, est itaque deleniti error in facilis porro! Labore eligendi odit officia exercitationem ratione?"
        },
        {
            id: 2, name: "women t-shirt winter season", image :"two.jpg", price: 30, discount:2, discountPrice : 30-2/100*30, quantity : 1, desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vel cumque sunt reiciendis laboriosam nisi! Facere sit, est itaque deleniti error in facilis porro! Labore eligendi odit officia exercitationem ratione?"
        },
        {
            id: 3, name: "unisex pant", image :"three.jpg", price: 50, discount:3, discountPrice : 50-3/100*50, quantity : 2, desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vel cumque sunt reiciendis laboriosam nisi! Facere sit, est itaque deleniti error in facilis porro! Labore eligendi odit officia exercitationem ratione?"
        },
        {
            id: 4, name: "unisex pant", image :"three.jpg", price: 50, discount:3, discountPrice : 50-3/100*50, quantity : 2, desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vel cumque sunt reiciendis laboriosam nisi! Facere sit, est itaque deleniti error in facilis porro! Labore eligendi odit officia exercitationem ratione?"
        }
        , {
            id: 5, name: "unisex pant", image :"three.jpg", price: 50, discount:3, discountPrice : 50-3/100*50, quantity : 2, desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vel cumque sunt reiciendis laboriosam nisi! Facere sit, est itaque deleniti error in facilis porro! Labore eligendi odit officia exercitationem ratione?"
        },
        {
            id: 6, name: "unisex pant", image :"three.jpg", price: 50, discount:3, discountPrice : 50-3/100*50, quantity : 2, desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vel cumque sunt reiciendis laboriosam nisi! Facere sit, est itaque deleniti error in facilis porro! Labore eligendi odit officia exercitationem ratione?"
        }
    ],
   product:[]
}

const ProductsReducer = (state = initialState, action) =>{
    switch(action.type){
    case "PRODUCT":
        return {...state, product : state.products.find(product => product.id === parseInt(action.id))}
    default :
        return state;
    }
}

export default ProductsReducer;