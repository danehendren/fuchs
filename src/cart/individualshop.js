import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getIndividualProduct } from '../actions'

 class Individualshop extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // console.log('component did mount log', this.props.params.id);
        const id = this.props.params.id

        this.props.getIndividualProduct(id);
    }



    render() {
        if(!this.props.individualProduct) {
            return null;
        }
        const product = this.props.individualProduct[0]
        console.log('Individualshop render() function this.prpos:', product);

        return (
            <div className="shop-product-container">
                <img src={ product.photo } className="shop-product-image"/>
                <h3>Artwork Title: {product.title}</h3>
                <p>Price: {product.price}</p>
            </div>
        )
    }
}

const mapStateToProps = function(state) {
    // console.log('inside mapStateToProps of individualshop.js', state);
    return {
        individualProduct: state.individualProduct
    }
};

const mapDispatchToProps = (dispatch) => ({

    getIndividualProduct: (id) => dispatch(getIndividualProduct(id)),

})

export default connect(mapStateToProps,  mapDispatchToProps)(Individualshop)
