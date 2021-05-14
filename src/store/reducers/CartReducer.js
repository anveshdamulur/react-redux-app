const initState ={
    products:[],
    totalPrice :0,
    totalQuantities : 0
}

const CartReducer = (state = initState, action) =>{
    let findProduct;
    let index;
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
            
        case "INC" :
            findProduct = state.products.find(product => product.id === action.payload)
            index = state.products.findIndex(product => product.id === action.payload)

            findProduct.quantity += 1;
            state.products[index] = findProduct;

            return{
                ...state,
                totalPrice : state.totalPrice + findProduct.discountPrice, 
                totalQuantities : state.totalQuantities +1
            }

        case "DEC":
            findProduct = state.products.find(product => product.id === action.payload)         
            index = state.products.findIndex(product => product.id === action.payload)
            
           if(findProduct.quantity > 1){
               findProduct.quantity -= 1;
               state.products[index] = findProduct;
               return{
                ...state,
                totalPrice : state.totalPrice -findProduct.discountPrice,
                totalQuantities : state.totalQuantities - 1
            }
           }
           else{
               return state
           }
          
        case "REMOVE":
            findProduct = state.products.find(product => product.id === action.payload);
            const filtered = state.products.filter(product => product.id !== action.payload)      
            return{
                ...state,
                products : filtered,
                totalPrice : state.totalPrice - findProduct.discountPrice * findProduct.quantity,
                totalQuantities : state.totalQuantities - findProduct.quantity
            }

        default:
            return state
    }
}

export default CartReducer;