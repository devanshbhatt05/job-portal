export const FETCH_POSTS = 'FETCH_POSTS';
export const NEW_POST = 'NEW_POST';

export const addToCart = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'addCart',
            payload: amount
        })
    }

}

export const deductFromCart = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'deductCart',
            payload: amount
        })
    }

}
