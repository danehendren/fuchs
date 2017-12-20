import React from 'react';
// import axios from 'axios';
import { Link } from 'react-router';
import About from './about';
import Portfolio from './portfolio';
import Welcome from './welcome';
import Home from './home';
import { connect } from 'react-redux';




 function Navi(props){

// const cartTotal = this.props.total
        return(
            <div>
                {/* <div className="christmasLights"></div> */}

                <div className="nav-bar-top">
                    <img src="/images/cart.svg" className="nav-bar-cart"/>
                    <div>{props.total}</div>
                    <a><img src="/images/ira-logo.jpg" className="nav-bar-logo"/></a>

                    <ul className="languagepicker" >
                        <Link to="/about"><li className="language">English</li></Link>
                        <Link to="/uber"><li className="language">Deutsch</li></Link>
                    </ul>


                </div>









                <div className="nav-bar-bottom">
                    <Link to="/" className="nav-bar-font">home</Link>
                    <Link to="/about" className="nav-bar-font">about</Link>
                    <Link to="/portfolio" className="nav-bar-font">portfolio</Link>
                    <Link to="/shop" className="nav-bar-font">shop</Link>
                </div>



            </div>
        )

}

const mapStateToProps = function(state) {
    console.log('navi component', state);
    return {
        total: state.cart.total
    }
};





//need Link to for each different page.
//check on how to do the drop down language in a cleaner way.
export default connect(mapStateToProps)(Navi)
