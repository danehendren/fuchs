import axios from 'axios';

export function getShopProducts() {

    return axios.get(`/get-shop-products/`)
        .then(( results ) => {
            console.log('inside the actions right about here', results);
            return {
                // console.log('INSIDE THE ACTIONS');
                type: "GET_SHOP_PRODUCTS",
                shopProducts: results.data.shopProducts

            }
        })
        .catch(err => console.log("err inside of actions.js axios",err))
}
//make note again of the ES6 stuff and log before setting the key values .  find out the data.data
