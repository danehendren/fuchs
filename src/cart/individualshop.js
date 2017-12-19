import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getShopProducts } from '../actions';

export default class Individualshop extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    

    render() {


        return (
            <div>
                <h1>Individualshop page</h1>
            </div>
        )
    }
}

// const mapStateToProps = function(state) {
//
// };
//
// const mapDispatchToProps = (dispatch) => ({
//
// })
//
// export default connect(mapStateToProps, mapDispatchToProps)(Individualshop)
