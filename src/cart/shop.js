import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getShopProducts } from '../actions';


 class Shop extends React.Component {
     constructor(props) {
         super(props)
     }

    componentDidMount() {
        this.props.getShopProducts()
    }

    // singleProduct() {
    //
    // }


    render() {
        if(!this.props.shopProducts) {
            return null;
        }

        const newShopProducts = this.props.shopProducts.map(product => {
            return (
                <div>

                    <a><img src={product.photo} className="shop-image"/></a>
                    
                </div>
            )
        })
        return (
            <div className="shop-container">
                { newShopProducts }
            </div>
        )
    }
}

const mapStateToProps = function(state) {
    // console.log('shop.js mapStateToProps state: ', state);
    return {
        shopProducts: state.shopProducts
    }
};

const mapDispatchToProps = (dispatch) => ({
    getShopProducts: () => dispatch(getShopProducts())

})



export default connect(mapStateToProps, mapDispatchToProps)(Shop)
