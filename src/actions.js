import axios from 'axios';

export function getShopProducts() {

    return axios.get(`/get-shop-products/`)
        .then(( results ) => {
            console.log('actions.js getShopProducts() results: ', results);
            return {
                // console.log('INSIDE THE ACTIONS');
                type: "GET_SHOP_PRODUCTS",
                shopProducts: results.data.shopProducts

            }
        })
        .catch(err => console.log("err inside of actions.js axios",err))
}





export function getIndividualProduct (id) {
    console.log('action.js getIndividualProduct ');
    return axios.get(`/individual-shop-product/${id}`)
        .then(( results ) => {
            return {
                type: "GET_INDIVIDUAL_PRODUCT",
                individualProduct: results.data.individualProduct
            }
        })
        .catch(err => console.log("err inside of actions.js axios INDIVIDUAL PRODUCT",err))
}
//make note again of the ES6 stuff and log before setting the key values .  find out the data.data
