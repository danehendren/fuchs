const defaultState = {
    shopProducts: [],
    cart: {
        items: [],
        total: 0
    }
}

export default function(state = defaultState, action) {
    if( action.type == "GET_SHOP_PRODUCTS" ) {
        // console.log('INSIDE OF THE REDUCERS.JS', action.shopProducts);
        state = Object.assign( {}, state, { shopProducts: action.shopProducts })

    }
    // console.log('reducers.js GET_SHOP_PRODUCTS State: ', state);
    if(action.type == "GET_INDIVIDUAL_PRODUCT") {
        state = Object.assign( {}, state, { individualProduct: action.individualProduct})
    }
    // console.log('ABOUT TO RETURN THAT STATE IN REDUCERS', state);

    if(action.type == "ADD_TO_CART") {
        // console.log('reducers.js add to cart reducers', action.product);

        var cartCopy = Object.assign( {}, state.cart);
        cartCopy.items.push(action.product)


        console.log('CURRENT LOG SPECIFIC', cartCopy.items[0]);
        console.log('CURRENT LOG', cartCopy.items);








        state = Object.assign({}, state, {
            cart: cartCopy
        })
    }

    return state;
}



//loop through items in cart and take their price and add them to the total.
//then return it and set cartCopy.total to this returned value

function calculateTotal(arr) {
    cartCopy.items[0].map(total => {
        return cartCopy + total;
    })
}
