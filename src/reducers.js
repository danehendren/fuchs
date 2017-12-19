const defaultState = {
    shopProducts: []
}

export default function(state = defaultState, action) {
    if( action.type == "GET_SHOP_PRODUCTS" ) {
        // console.log('INSIDE OF THE REDUCERS.JS', action.shopProducts);
        state = Object.assign( {}, state, { shopProducts: action.shopProducts })

    }
    console.log('reducers.js GET_SHOP_PRODUCTS State: ', state);
    return state;
}
