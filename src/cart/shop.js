import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getShopProducts } from '../actions';


 class Shop extends React.Component {
     constructor(props) {
         super(props)
     }

    // componentDidMount() {
    //     this.props.getShopProducts()
    // }


    render() {

        if(!this.props.shopProducts) {
            return null;
        } else {

            const newShopProducts = this.props.shopProducts.map(mappedProducts => {
                <div>
                    {/* <h1>{mappedProducts.title}</h1> */}
                </div>
            })
        }

        return (
            <div>
                {/* <h1>{ newShopProducts.title }</h1> */}
                <div className="shop-container">
                    <div>
                        <a><img src="/portfolio/tigerxmas.jpg" className="shop-image" /></a>
                        <a><img src="/portfolio/alicexmas.jpg" className="shop-image" /></a>
                        <a><img src="/portfolio/panxmas.jpg" className="shop-image" /></a>
                        <a><img src="/portfolio/xmastreecat.jpg" className="shop-image" /></a>
                        <a><img src="/portfolio/evilsanta.jpg" className="shop-image"/></a>
                    </div>

                </div>

            </div>
        )
    }
}

const mapStateToProps = function(state) {
    console.log('running map state to props in GUYS', state);
    return {
        shopProducts: state.shopProducts
    }
};

const mapDispatchToProps = (dispatch) => ({
    getShopProducts: () => dispatch(getShopProducts())

})



export default connect(mapStateToProps, mapDispatchToProps)(Shop)
//move the axios stuff into an action (that which is in componentDidMount)
//set up map state to props
//uncomment 37 and export it that way rather than the Class like above.
//dispatch the action in componentDidMount with mapdispatch to props or without it.
