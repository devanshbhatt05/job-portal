import { combineReducers } from 'redux';
import postReducer from './postReducer';
import amountReducer from './amountReducer';
import cartReducer from './cartReducer';

export default combineReducers(
    {
        posts: postReducer,
        amount: amountReducer,
        cart: cartReducer
    }
)