const initState ={
    products:[],
    totalPrice :0,
    totalQuantities : 0
}

const CartReducer = (state = initState, action) =>{
    switch(action.type){
        case "ADD_TO_CART":
            const {product, count}= action.payload;
    
            const isAvailable = state.products.find(item => item.id === product.id);
            
            if(isAvailable){
                return state;
            }else{
                const tPrice = state.totalPrice + product.discountPrice * count;
                const tQuantities = state.totalQuantities + count;
                product.quantity = count;
                return {
                    ...state, 
                   products : [...state.products, product],
                   totalPrice : tPrice,
                   totalQuantities : tQuantities
                }
            }       
        default:
            return state
    }
}

export default CartReducer;