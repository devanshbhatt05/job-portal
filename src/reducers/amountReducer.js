import { addToCart,deductFromCart } from "../actions/types"

const reducer=(state=0, action) => {
    if (action.type === 'addCart'){
        return state + action.payload
    }
    else if (action.type === 'deductCart'){
        return state - action.payload
    }
    else{
        return state
    }

}

export default reducer